import assert from "node:assert/strict";
import { gradeDictation } from "../web/api/_shared.ts";

const original = "Last week I went to the theatre. I had a very good seat.";

const exact = gradeDictation(original, original);
assert.equal(exact.match_pct, 100, "exact dictation should score 100%");

const withExtra = gradeDictation(`${original} I copied another sentence by mistake.`, original);
assert.ok(
  withExtra.match_pct < 100,
  `extra submitted words must reduce match_pct, got ${withExtra.match_pct}%`
);
assert.match(withExtra.diff_html, /<del>I copied another sentence by mistake\.<\/del>/, "extra submitted words should appear as deleted diff");

const missingWord = gradeDictation("Last week I went to the theatre. I had a good seat.", original);
assert.ok(
  missingWord.match_pct < 100,
  `missing original words must reduce match_pct, got ${missingWord.match_pct}%`
);
assert.match(missingWord.diff_html, /<ins>very<\/ins>/, "missing original word should appear as inserted diff");

console.log("✓ dictation grading penalizes missing and extra words");
