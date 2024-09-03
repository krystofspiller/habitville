import { type Range } from './types'

type DefinedLevel = Range<1, 22>

const xpNeededForLevel: Record<DefinedLevel, number> = {
  1: 5, // 5
  2: 10, // 15
  3: 15, // 30
  4: 22, // 52
  5: 33, // 85
  6: 50, // 135
  7: 75, // 210
  8: 110, // 320
  9: 160, // 480
  10: 250, // 730
  11: 380, // 1110
  12: 590, // 1700
  13: 900, // 2600
  14: 1400, // 4000
  15: 2100, // 6100
  16: 3100, // 9200
  17: 4600, // 13800
  18: 7000, // 20800
  19: 10500, // 31300
  20: 16000, // 47300
  21: 24000, // 71300
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
