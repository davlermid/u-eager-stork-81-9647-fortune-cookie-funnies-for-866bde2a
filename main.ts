// Fortune Cookie Funnies for Engineers — entry program.
// Writes one fortune-cookie line (at most 120 characters, no trailing
// newline) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "Your standup update will be 'same as yesterday' until retirement.";

// The gate refuses anything over 120 characters, so fail loudly here
// rather than shipping an invalid entry.
if (FORTUNE.length > 120) {
  throw new Error(`fortune is ${FORTUNE.length} characters, over the 120 limit`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
