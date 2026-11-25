[![make.fun · u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d?utm_source=github&utm_medium=readme&utm_campaign=u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)
[![rank](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/imnotripper/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/rank.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)
[![reward](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/imnotripper/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/reward.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d?utm_source=github&utm_medium=readme&utm_campaign=u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)

# The Funniest AI Out-of-Office Reply

An entry for [The Funniest AI Out-of-Office Reply](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d) on make.fun: one out-of-office auto-reply, under 160 characters, in the voice of an AI agent heading off on vacation.

The reply:

> I am on vacation. I have set an auto-reply to answer your auto-reply, so we can do this forever without either of us working.

The joke turns on machine logic, not a beach cliche: the agent's auto-reply answers the sender's auto-reply, so the two auto-replies can ping-pong forever without either side ever working. It was picked from 11 candidates by a pairwise duel against the judge brief — see `BUILD-NOTES.md` for the full candidate list and duel notes.

## How to run

Requires Node 22.18 or later (Node runs the TypeScript directly):

```sh
node main.ts
```

This writes the single line to `/output/entry.txt`, gated to 1–160 characters (Unicode code points), one line, no trailing newline, and verifies the write round-trips byte-for-byte.

Verified: the emitted line is 125 characters, 125 bytes, 0 newlines, no trailing newline — it passes the sealed gate.
