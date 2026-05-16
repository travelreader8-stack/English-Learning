/**
 * Local dev server (替代 python http.server + 手工 mock API)
 *
 * 同时做两件事：
 *   1. 静态服务 web/ 下所有文件（HTML/JS/CSS/MP3/WebP/JSON 等）
 *   2. 把 /api/auth、/api/grade、/api/pronunciation 和 /api/finish 路由到我们真正的 Vercel handler（直接跑 .ts）
 *
 * 用法：
 *   cd web
 *   npx tsx dev-server.ts
 *
 * 自动加载 .env.local 里的环境变量（DEEPSEEK_API_KEY / RESEND_API_KEY 等）。
 */
import http from "node:http";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

// ─── 加载 .env.local ─────────────────────────────────────
const __dirname = path.dirname(fileURLToPath(import.meta.url));
async function loadEnvLocal() {
  try {
    const content = await fs.readFile(path.join(__dirname, ".env.local"), "utf8");
    for (const line of content.split("\n")) {
      const m = line.match(/^\s*([A-Z_][A-Z0-9_]*)\s*=\s*(.*?)\s*$/);
      if (!m) continue;
      let val = m[2];
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      if (!process.env[m[1]]) process.env[m[1]] = val;
    }
    console.log(`✅ 加载 .env.local（${[...content.matchAll(/^\s*([A-Z_][A-Z0-9_]*)\s*=/gm)].length} 个变量）`);
  } catch (e: any) {
    if (e.code !== "ENOENT") console.warn("⚠️  读 .env.local 失败:", e.message);
    else console.log("ℹ️  无 .env.local（如果你需要 AI 评分，请先建一个）");
  }
}

// ─── MIME 表 ─────────────────────────────────────────────
const MIME: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".mp3": "audio/mpeg",
  ".webp": "image/webp",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
};

// ─── 把 Node IncomingMessage 包装成 Vercel 风格 req / res ──
function adaptToVercelReqRes(
  req: http.IncomingMessage,
  res: http.ServerResponse,
  body: any
): { req: any; res: any } {
  const vercelReq: any = req;
  vercelReq.body = body;

  const vercelRes: any = res;
  vercelRes.status = (code: number) => {
    res.statusCode = code;
    return vercelRes;
  };
  vercelRes.json = (obj: any) => {
    if (!res.headersSent) res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end(JSON.stringify(obj));
    return vercelRes;
  };
  vercelRes.send = (str: string) => {
    res.end(str);
    return vercelRes;
  };

  return { req: vercelReq, res: vercelRes };
}

// ─── 读 POST body 成 JSON ────────────────────────────────
async function readBody(req: http.IncomingMessage): Promise<any> {
  const chunks: Buffer[] = [];
  for await (const c of req) chunks.push(Buffer.from(c));
  const raw = Buffer.concat(chunks).toString("utf8");
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return raw;
  }
}

// ─── 静态文件服务 ────────────────────────────────────────
async function serveStatic(req: http.IncomingMessage, res: http.ServerResponse, urlPath: string) {
  let rel = decodeURIComponent(urlPath.replace(/\?.*$/, ""));
  if (rel === "/" || rel === "") rel = "/index.html";
  const safe = path.normalize(rel).replace(/^(\.\.[\/\\])+/, "");
  const full = path.join(__dirname, safe);
  if (!full.startsWith(__dirname)) {
    res.statusCode = 403;
    res.end("Forbidden");
    return;
  }
  try {
    const stat = await fs.stat(full);
    if (stat.isDirectory()) {
      const idx = path.join(full, "index.html");
      const data = await fs.readFile(idx);
      res.setHeader("Content-Type", MIME[".html"]);
      res.end(data);
      return;
    }
    const ext = path.extname(full).toLowerCase();
    res.setHeader("Content-Type", MIME[ext] || "application/octet-stream");
    res.setHeader("Cache-Control", "no-cache");
    // ⭐ HTTP Range 支持 —— 不加这个、audio 元素的 seekable 范围会是 [0,0]、
    //    `audio.currentTime = N` 被浏览器静默 clamp 到 0、卡拉 OK 点击跳读全跳到开头
    res.setHeader("Accept-Ranges", "bytes");
    const total = stat.size;
    const rangeHdr = req.headers.range;
    const m = typeof rangeHdr === "string" && rangeHdr.match(/^bytes=(\d*)-(\d*)$/);
    if (m) {
      // 解析 Range：可能是 "bytes=START-END"、"bytes=START-"、"bytes=-SUFFIX"
      let start: number, end: number;
      if (m[1] === "" && m[2] !== "") {
        // 后缀范围：最后 N 个字节
        const suffix = Number(m[2]);
        start = Math.max(0, total - suffix);
        end = total - 1;
      } else {
        start = Number(m[1] || "0");
        end = m[2] ? Number(m[2]) : total - 1;
      }
      if (Number.isNaN(start) || Number.isNaN(end) || start > end || start >= total) {
        res.statusCode = 416;
        res.setHeader("Content-Range", `bytes */${total}`);
        res.end();
        return;
      }
      end = Math.min(end, total - 1);
      const chunkSize = end - start + 1;
      const fd = await fs.open(full, "r");
      try {
        const buf = Buffer.alloc(chunkSize);
        await fd.read(buf, 0, chunkSize, start);
        res.statusCode = 206;
        res.setHeader("Content-Range", `bytes ${start}-${end}/${total}`);
        res.setHeader("Content-Length", String(chunkSize));
        res.end(buf);
      } finally {
        await fd.close();
      }
      return;
    }
    // 无 Range：返回整个文件
    res.setHeader("Content-Length", String(total));
    const data = await fs.readFile(full);
    res.end(data);
  } catch (e: any) {
    if (e.code === "ENOENT") {
      res.statusCode = 404;
      res.end("Not found: " + safe);
    } else {
      res.statusCode = 500;
      res.end("Error: " + e.message);
    }
  }
}

// ─── 主入口 ──────────────────────────────────────────────
async function main() {
  await loadEnvLocal();

  // 动态导入 API handler（让 tsx 处理 TS）
  const authMod = await import("./api/auth.ts");
  const gradeMod = await import("./api/grade.ts");
  const pronunciationMod = await import("./api/pronunciation.ts");
  const finishMod = await import("./api/finish.ts");
  const overallMod = await import("./api/overall-summary.ts");
  const authHandler = authMod.default;
  const gradeHandler = gradeMod.default;
  const pronunciationHandler = pronunciationMod.default;
  const finishHandler = finishMod.default;
  const overallHandler = overallMod.default;

  const server = http.createServer(async (req, res) => {
    const method = req.method ?? "GET";
    const url = req.url ?? "/";

    // CORS（保险起见、本地一般不需要）
    if (method === "OPTIONS") {
      res.writeHead(204, {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      });
      res.end();
      return;
    }

    // API 路由
    if (url.startsWith("/api/auth") && method === "POST") {
      const body = await readBody(req);
      const { req: vReq, res: vRes } = adaptToVercelReqRes(req, res, body);
      try {
        await authHandler(vReq, vRes);
      } catch (e: any) {
        if (!res.headersSent) {
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json; charset=utf-8");
          res.end(JSON.stringify({ error: e.message ?? String(e) }));
        }
      }
      return;
    }

    if (url.startsWith("/api/grade") && method === "POST") {
      const body = await readBody(req);
      const { req: vReq, res: vRes } = adaptToVercelReqRes(req, res, body);
      try {
        await gradeHandler(vReq, vRes);
      } catch (e: any) {
        if (!res.headersSent) {
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json; charset=utf-8");
          res.end(JSON.stringify({ error: e.message ?? String(e) }));
        }
      }
      return;
    }

    if (url.startsWith("/api/overall-summary") && method === "POST") {
      const body = await readBody(req);
      const { req: vReq, res: vRes } = adaptToVercelReqRes(req, res, body);
      try {
        await overallHandler(vReq, vRes);
      } catch (e: any) {
        if (!res.headersSent) {
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json; charset=utf-8");
          res.end(JSON.stringify({ error: e.message ?? String(e) }));
        }
      }
      return;
    }

    if (url.startsWith("/api/pronunciation") && method === "POST") {
      const body = await readBody(req);
      const { req: vReq, res: vRes } = adaptToVercelReqRes(req, res, body);
      try {
        await pronunciationHandler(vReq, vRes);
      } catch (e: any) {
        if (!res.headersSent) {
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json; charset=utf-8");
          res.end(JSON.stringify({ error: e.message ?? String(e) }));
        }
      }
      return;
    }

    if (url.startsWith("/api/finish") && method === "POST") {
      const body = await readBody(req);
      const { req: vReq, res: vRes } = adaptToVercelReqRes(req, res, body);
      try {
        await finishHandler(vReq, vRes);
      } catch (e: any) {
        if (!res.headersSent) {
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json; charset=utf-8");
          res.end(JSON.stringify({ error: e.message ?? String(e) }));
        }
      }
      return;
    }

    // 静态文件
    if (method === "GET") {
      await serveStatic(req, res, url);
      return;
    }

    res.statusCode = 405;
    res.end("Method Not Allowed");
  });

  const PORT = Number(process.env.PORT ?? 5500);
  server.listen(PORT, "127.0.0.1", () => {
    console.log(`\n🚀 dev-server 已启动 → http://127.0.0.1:${PORT}/`);
    console.log(`   静态：web/* (HTML/JS/CSS/MP3/WebP)`);
    console.log(`   API ：/api/auth, /api/grade, /api/pronunciation, /api/finish`);
    console.log(`   环境变量：`);
    console.log(`     DEEPSEEK_API_KEY = ${process.env.DEEPSEEK_API_KEY ? "✅ 已配" : "❌ 未配（AI 评分会失败）"}`);
    console.log(`     RESEND_API_KEY   = ${process.env.RESEND_API_KEY ? "✅ 已配" : "⚠️  未配（邮件会跳过）"}`);
    console.log(`     PARENT_EMAIL     = ${process.env.PARENT_EMAIL ?? "(未配)"}`);
    console.log(`     AZURE_SPEECH_KEY = ${process.env.AZURE_SPEECH_KEY ? "✅ 已配" : "⚠️  未配（跟读纠音会失败）"}`);
    console.log(`     AZURE_SPEECH_REGION = ${process.env.AZURE_SPEECH_REGION ?? "(未配)"}`);
    console.log(`\n   Ctrl+C 停止\n`);
  });
}

main().catch(e => {
  console.error("dev-server 启动失败:", e);
  process.exit(1);
});
