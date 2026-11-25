import { mkdirSync, writeFileSync } from "node:fs";

// One short rant about an everyday annoyance: the four-minute voice
// note that exists only to say "yes". Sharp, concrete, no filler.
const rant =
  'She sent a four-minute voice note. Four minutes. To say "yes." ' +
  "It opens with breathing, a long pause, a story about her cat, " +
  'and somewhere in minute three, buried like treasure, the word "yes." ' +
  "Text it. Two letters. My thumb is tired from holding the phone like a seashell.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", rant, "utf8");
