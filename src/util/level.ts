import { type Range } from './types'

type DefinedLevel = Range<1, 22>

const xpNeededForLevel: Record<DefinedLevel, number> = {
  1: 0,
  2: 10,
  3: 15,
  4: 20,
  5: 30,
  6: 50,
  7: 75,
  8: 100,
  9: 150,
  10: 250,
  11: 500,
  12: 800,
  13: 1250,
  14: 1900,
  15: 2900,
  16: 4400,
  17: 6500,
  18: 10000,
  19: 15000,
  20: 22000,
  21: 33000,
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

  const xpNeededForNextLevel = xpNeededForLevel[(level + 1) as DefinedLevel]
  const currentLevelXpProgressAbs =
    xp - totalXpNeededForLevel[(level - 1) as DefinedLevel]

  return {
    level,
    xpNeededForNextLevel,
    currentLevelXpProgressAbs,
    currentLevelXpProgressPct:
      (currentLevelXpProgressAbs / xpNeededForNextLevel) * 100,
  }
}
