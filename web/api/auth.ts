import { checkToken } from "./_shared.js";

interface Payload {
  token?: string;
}

export default function handler(req: any, res: any) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  let payload: Payload;
  try {
    payload = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
  } catch {
    res.status(400).json({ error: "Invalid JSON" });
    return;
  }

  const tokenErr = checkToken(payload);
  if (tokenErr) {
    res.status(403).json({ error: tokenErr });
    return;
  }

  res.status(200).json({ ok: true });
}
