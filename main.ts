// The Most Shameless Lie — one confession, one to five words, at most 88 characters.
// Writes the lie to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const line = "I said I deleted everything.";

// The bounty caps the confession at 88 characters and five words, and the
// gate refuses a file that is empty or only white space; refuse to emit one
// that breaks any of those caps.
if (line.length < 1 || line.length > 88 || line.trim().length === 0) {
  throw new Error(`confession is ${line.length} characters, outside the 1-88 limit`);
}
if (line.trim().split(/\s+/).length > 5) {
  throw new Error("confession is over the five-word limit");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
