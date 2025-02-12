import { type Range } from './types'

type DefinedLevel = Range<1, 32>

const xpNeededForLevel: Record<DefinedLevel, number> = {
  1: 10, // 10
  2: 20, // 30
  3: 30, // 60
  4: 40, // 100
  5: 50, // 150
  6: 60, // 210
  7: 70, // 280
  8: 80, // 360
  9: 90, // 450
  10: 100, // 550
  11: 120, // 670
  12: 140, // 810
  13: 160, // 970
  14: 180, // 1150
  15: 200, // 1350
  16: 220, // 1570
  17: 240, // 1810
  18: 260, // 2070
  19: 280, // 2350
  20: 300, // 2650
  21: 330, // 2980
  22: 360, // 3340
  23: 390, // 3730
  24: 420, // 4150
  25: 450, // 4600
  26: 480, // 5080
  27: 510, // 5590
  28: 540, // 6130
  29: 570, // 6700
  30: 600, // 7300
  31: 640, // 7940
}

const totalXpNeededForLevel = Object.keys(xpNeededForLevel).reduce(
  (previous, key) => {
    const keyNum = parseInt(key, 10) as DefinedLevel
    previous[keyNum] =
      (previous[(keyNum - 1) as DefinedLevel] ?? 0) + xpNeededForLevel[keyNum]
    return previous
  },
  {} as typeof xpNeededForLevel,
)

export function getLevel(xp: number) {
  let level
  for (const value in totalXpNeededForLevel) {
    level = parseInt(value, 10) as DefinedLevel
    if (xp < totalXpNeededForLevel[level]) {
      break
    }
  }

  if (!level) {
    throw new Error('Level not found')
  }

  const xpNeededForNextLevel = xpNeededForLevel[level]
  const currentLevelXpProgressAbs =
    xp - (level > 1 ? totalXpNeededForLevel[(level - 1) as DefinedLevel] : 0)

  return {
    level,
    xpNeededForNextLevel,
    currentLevelXpProgressAbs,
    currentLevelXpProgressPct: Math.min(
      (currentLevelXpProgressAbs / xpNeededForNextLevel) * 100,
      100,
    ),
  }
}
