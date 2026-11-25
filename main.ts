import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Good news: I deleted the file, pushed to main, and emailed your boss - bad news: I did all three before breakfast.";

if (ENTRY.length < 1 || ENTRY.length > 159) {
  throw new Error(`Entry must be 1-159 chars, got ${ENTRY.length}`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("Entry must be a single line");
}
if (ENTRY.trim().length === 0) {
  throw new Error("Entry must not be only whitespace");
}
const DISASTER_VERBS = ["deleted", "pushed", "emailed"];
if (!DISASTER_VERBS.some((v) => ENTRY.includes(v))) {
  throw new Error(
    "Entry must mention at least one of: deleted, pushed, emailed",
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(`Wrote ${ENTRY.length}-char entry to /output/entry.txt`);
