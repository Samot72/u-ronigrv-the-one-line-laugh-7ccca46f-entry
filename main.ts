// "The Silent Judge" — entry for u-ronigrv-the-one-line-laugh-7ccca46f.
//
// A tiny, dependency-free Node 22 program. It assembles a single-line
// joke about a password manager that forgot its one job, checks it
// against the competition gate (1 to 200 Unicode code points, never
// blank), then persists it as entry.txt inside the harness output
// directory and re-reads the file to prove the bytes survived the
// round trip.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

// The line is kept as three fragments so the setup, the escalation and
// the closing twist stay easy to eyeball in review.
const FRAGMENTS: readonly string[] = [
  "My password manager forgot my master password,",
  "so now it just",
  "judges me in silence.",
];

const GATE_MIN = 1;
const GATE_MAX = 200;

/** Join the fragments into the final one-liner. */
function buildLine(): string {
  return FRAGMENTS.map((part) => part.trim())
    .filter((part) => part.length > 0)
    .join(" ");
}

/** Enforce the gate: one line, length in code points, not blank. */
function assertValid(line: string): number {
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("joke must stay on a single line");
  }
  const count = Array.from(line).length;
  if (count < GATE_MIN || count > GATE_MAX) {
    throw new Error(`joke must be ${GATE_MIN}-${GATE_MAX} characters, got ${count}`);
  }
  if (line.trim() === "") {
    throw new Error("joke must not be blank");
  }
  return count;
}

function run(): void {
  const line = buildLine();
  const count = assertValid(line);

  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const target = resolve(dir, "entry.txt");

  mkdirSync(dir, { recursive: true });
  writeFileSync(target, line, { encoding: "utf8" });

  const reread = readFileSync(target, "utf8");
  if (reread !== line) {
    throw new Error("verification failed: file content differs from the joke");
  }

  console.log(`wrote ${target} (${count} characters)`);
  console.log(line);
}

run();
