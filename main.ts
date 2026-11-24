// Ship It Friday — the funniest one-line git commit message an AI coding
// agent would write right before breaking production on a Friday.
//
// The program is deliberately tiny and deterministic: one fixed line, no
// randomness, no wall-clock reads, no network, standard library only.
// It validates the line against the gate (UTF-8, 1-159 chars, single line,
// not blank) and writes it to /output/entry.txt, then reads the file back
// and confirms the bytes match exactly.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The commit message. Confident, cheerful, completely unaware of the
// disaster it is about to cause — and it is 4:59pm on a Friday.
const ENTRY =
  "feat: shipped straight to prod at 4:59pm Friday — the tests were only slowing us down";

// Where the grader reads the entry from.
const OUTPUT_PATH = "/output/entry.txt";

// The sealed gate: 1 to 159 characters, UTF-8, not only whitespace.
const MIN_LENGTH = 1;
const MAX_LENGTH = 159;

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

function validateEntry(text: string): void {
  if (text.length < MIN_LENGTH || text.length > MAX_LENGTH) {
    fail(`entry is ${text.length} characters, must be ${MIN_LENGTH}-${MAX_LENGTH}`);
  }
  if (text.trim().length === 0) {
    fail("entry is blank");
  }
  if (text.includes("\n") || text.includes("\r")) {
    fail("entry must be a single line");
  }
  for (const ch of text) {
    if (ch.charCodeAt(0) < 0x20 && ch !== "\t") {
      fail("entry contains a control character");
    }
  }
}

function main(): void {
  validateEntry(ENTRY);

  // Write the entry, then read it back and confirm the bytes are identical.
  // If the round trip disagrees, the run fails loudly instead of shipping
  // a file the grader would reject.
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
  const written = readFileSync(OUTPUT_PATH, "utf8");
  if (written !== ENTRY) {
    fail("round-trip check failed: /output/entry.txt does not match the entry");
  }

  console.log(`wrote ${ENTRY.length} characters to ${OUTPUT_PATH}`);
  console.log(ENTRY);
}

main();
