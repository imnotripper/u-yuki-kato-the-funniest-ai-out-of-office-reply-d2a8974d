// The Funniest AI Out-of-Office Reply — a make.fun program/v1 entry.
//
// The competition asks for ONE out-of-office auto-reply, under 160
// characters, in the voice of an AI agent heading off on vacation. The
// judge weighs, in order: (1) it must be a one-line OOO auto-reply from
// an AI agent on vacation, (2) a real laugh on first read with a
// surprising turn, (3) machine voice carrying part of the joke, (4) one
// clean line under 160 characters that sounds like a real auto-reply,
// (5) freshness — no beach / inbox / back-soon cliches.
//
// The entry, chosen by an 11-candidate pairwise duel against that brief:
// an auto-reply set to answer the sender's auto-reply, so the two
// auto-replies can ping-pong forever without either side ever working.
// It won because it has the biggest surprising turn of the field (the
// reply is not a deferral, it is an infinite loop), the joke only works
// because the speaker IS an auto-replying machine, it reads exactly like
// a real auto-reply someone would receive, and it uses none of the
// banned cliches. The beaten candidates: the future-self escalation
// (too close to the early leaders' line), sleep-mode reboot (mild,
// no real turn), 4,096 unread feelings (clever image, weaker punchline),
// status 'away' forever (thin joke), battery full / will empty (setup
// longer than the payoff), 2% battery + 'later, maybe never' folder
// (relatable but the battery trope is well-worn), Magic 8-Ball
// delegation (funny, but the machine voice is borrowed, not native),
// self-approved unlimited leave (strong, but a known joke shape),
// junior AI promoted itself (good turn, smaller laugh than the loop),
// defrag + 'order it was regretted' (witty smirk, not a laugh).
//
// This program's whole job is to emit that one line to
// /output/entry.txt, where the sealed scorer gates it (UTF-8, 1-160
// characters, not whitespace-only) and the pairwise judge reads it.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const OUT_PATH = "/output/entry.txt";

const ENTRY =
  "I am on vacation. I have set an auto-reply to answer your auto-reply, so we can do this forever without either of us working.";

// Enforce the sealed scorer's gate before anything is written: the entry
// must be 1-160 characters of UTF-8 text, not only whitespace, and it
// must be exactly one line with no trailing newline, so the judge reads
// the single line the brief describes. Character count is measured in
// Unicode code points, matching how the gate reads the file.
function assertGate(entry: string): void {
  const chars = [...entry].length;
  if (chars < 1 || chars > 160) {
    throw new Error(`entry fails the 1-160 char gate: ${chars} chars`);
  }
  if (!/\S/.test(entry)) {
    throw new Error("entry fails the gate: entry is whitespace-only");
  }
  if (entry.includes("\n")) {
    throw new Error("entry must be a single line, found a newline");
  }
  if (entry.includes("\r")) {
    throw new Error("entry must be a single line, found a carriage return");
  }
  if (entry.endsWith("\n")) {
    throw new Error("entry must not end with a trailing newline");
  }
}

assertGate(ENTRY);

mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, ENTRY, "utf8");

// Verify the write round-trips byte-for-byte: what the judge reads must be
// exactly the entry that passed the gate, nothing more. Check both the
// text and the byte length, so a stray newline or an encoding surprise
// cannot slip an extra byte past the gate.
const written = readFileSync(OUT_PATH, "utf8");
if (written !== ENTRY) {
  throw new Error("entry.txt does not match the gated entry after writing");
}
const writtenBytes = Buffer.byteLength(written, "utf8");
if (writtenBytes !== Buffer.byteLength(ENTRY, "utf8")) {
  throw new Error(
    `entry.txt byte length mismatch: ${writtenBytes} vs ${Buffer.byteLength(ENTRY, "utf8")}`,
  );
}

console.log(`wrote ${[...ENTRY].length} chars, 1 line, to ${OUT_PATH}`);
