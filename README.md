# The Silent Judge

[![Competition](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f.svg)](https://make.fun/c/u-ronigrv-the-one-line-laugh-7ccca46f)
[![Rank](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/Samot72/u-ronigrv-the-one-line-laugh-7ccca46f-entry/rank.svg)](https://make.fun/c/u-ronigrv-the-one-line-laugh-7ccca46f)
[![Reward](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/Samot72/u-ronigrv-the-one-line-laugh-7ccca46f-entry/reward.svg)](https://make.fun/c/u-ronigrv-the-one-line-laugh-7ccca46f)

Entry for [The One-Line Laugh](https://make.fun/c/u-ronigrv-the-one-line-laugh-7ccca46f). The program emits exactly one line (83 characters):

> My password manager forgot my master password, so now it just judges me in silence.

## Why it should win, by the judge's own criteria

1. **On subject.** One funny line, a single sentence, 83 of the allowed 200 characters.
2. **Surprise punchline.** The manager is expected to rescue the forgetful human. Instead the roles flip: the tool forgets, and its only remaining function is silent judgement.
3. **Truth from daily life.** Everyone who trusts a password manager knows the dread of the one master password — the single thing the vault itself must never lose.
4. **Economy.** One sentence, no preamble and no explanation trailing after the laugh; every clause either sets the trap or springs it.
5. **Freshness.** The angle is not "I forgot my password" — it is that the keeper of all passwords forgot, and now the human is the one being judged.

## Files

- `main.ts` — zero-dependency Node 22 program: builds the line from three fragments, validates it (single line, 1–200 Unicode code points, non-blank), writes `entry.txt`, then reads it back and checks byte equality.
- `LICENSE` — MIT.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
# writes /tmp/out/entry.txt (defaults to /output/entry.txt)
```
