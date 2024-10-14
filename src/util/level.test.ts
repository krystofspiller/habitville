import { getLevel } from '~/util/level'

describe('level', () => {
  test.each([
    [0, 1, 10, 0, 0],
    [9, 1, 10, 9, (9 / 10) * 100],
    [10, 2, 20, 0, 0],
    [29, 2, 20, 19, (19 / 20) * 100],
    [30, 3, 30, 0, 0],
    [59, 3, 30, 29, (29 / 30) * 100],
    [60, 4, 40, 0, 0],
    [99, 4, 40, 39, (39 / 40) * 100],
    [100, 5, 50, 0, 0],
    [149, 5, 50, 49, (49 / 50) * 100],
    [150, 6, 60, 0, 0],
    [209, 6, 60, 59, (59 / 60) * 100],
    [210, 7, 70, 0, 0],
    [279, 7, 70, 69, (69 / 70) * 100],
    [280, 8, 80, 0, 0],
    [359, 8, 80, 79, (79 / 80) * 100],
    [360, 9, 90, 0, 0],
    [449, 9, 90, 89, (89 / 90) * 100],
    [450, 10, 100, 0, 0],
    [549, 10, 100, 99, (99 / 100) * 100],
    [550, 11, 120, 0, 0],
  ])(
    'calculate level correctly for xp: %d',
    (
      xp,
      level,
      xpNeededForNextLevel,
      currentLevelXpProgressAbs,
      currentLevelXpProgressPct,
    ) => {
      expect(getLevel(xp)).toStrictEqual(
        expect.objectContaining({
          level,
          xpNeededForNextLevel,
          currentLevelXpProgressAbs,
          currentLevelXpProgressPct,
        }),
      )
    },
  )
})
