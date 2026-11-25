// The Funniest Sick-Day Excuse — u-zeroxfive-the-funniest-sick-day-excuse-37423a36
// Writes a single one-line sick-day excuse (under 200 characters) to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "Hi, I won't be in today — I pulled a muscle sneezing and now I'm horizontal until further notice.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

// Gate guard: the entry must be exactly one non-blank line of 1-200
// characters, matching the competition's gate. No trailing whitespace:
// the judge compares the line as submitted, so every byte must earn
// its place.
if (
  EXCUSE.length < 1 ||
  EXCUSE.length > 200 ||
  EXCUSE.trim().length === 0 ||
  EXCUSE !== EXCUSE.trim() ||
  EXCUSE.includes("\n")
) {
  throw new Error(`Excuse fails the gate: ${JSON.stringify(EXCUSE)}`);
}
console.log(`Excuse (${EXCUSE.length} chars): ${EXCUSE}`);

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
