import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// One Line, One Chill: a single sentence of horror, under 200 characters.
// The sentence must land as a scare in one breath, so it is kept as one line.
const ENTRY =
  "I live alone, so the breathing at 3 a.m. can't be mine; last night I held my breath, and in the dark I watched my chest rise anyway.";

const OUTPUT = "/output/entry.txt";

const text = ENTRY.trim();

if (text.length < 1 || text.length > 200 || /[\r\n]/.test(text)) {
  throw new Error("Entry must be a single line of 1-200 characters");
}

mkdirSync(dirname(OUTPUT), { recursive: true });
writeFileSync(OUTPUT, text, "utf8");

process.stdout.write(`wrote ${text.length} characters to ${OUTPUT}\n`);
