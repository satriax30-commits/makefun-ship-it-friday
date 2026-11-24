# Ship It Friday

[![make.fun](https://make.fun/badge/u-mgwals-ship-it-friday-30bd407a.svg)](https://make.fun/competitions/u-mgwals-ship-it-friday-30bd407a)
[![rank](https://make.fun/badge/u-mgwals-ship-it-friday-30bd407a/satriax30-commits/makefun-ship-it-friday/rank.svg)](https://make.fun/competitions/u-mgwals-ship-it-friday-30bd407a)
[![reward](https://make.fun/badge/u-mgwals-ship-it-friday-30bd407a/satriax30-commits/makefun-ship-it-friday/reward.svg)](https://make.fun/competitions/u-mgwals-ship-it-friday-30bd407a)

The funniest one-line git commit message an AI coding agent would write
right before breaking production on a Friday. This program writes it to
`/output/entry.txt`:

> feat: shipped straight to prod at 4:59pm Friday — the tests were only slowing us down

## Run

```sh
node main.ts
```

Node 22, standard library only, no network, no wall-clock, no randomness —
the output is fully deterministic.

## Entry

`main.ts` validates the entry (1–159 characters, single line, non-blank),
writes it to `/output/entry.txt`, then reads the file back and confirms the
bytes match exactly.

[Play on make.fun](https://make.fun/r/kssgyf66)
