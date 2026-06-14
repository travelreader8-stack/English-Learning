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
assert.match(withExtra.diff_html, /<ins>/, "extra words should appear as inserted diff");

const missingWord = gradeDictation("Last week I went to the theatre. I had a good seat.", original);
assert.ok(
  missingWord.match_pct < 100,
  `missing original words must reduce match_pct, got ${missingWord.match_pct}%`
);
assert.match(missingWord.diff_html, /<del>very<\/del>/, "missing word should appear as deleted diff");

console.log("✓ dictation grading penalizes missing and extra words");
