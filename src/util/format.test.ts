import { formatScore } from '~/util/format'

describe('format', () => {
  test.each([
    [1000000, '1'],
    [100000, '1'],
    [99999, '1'],
    [10000, '1'],
    [9999, '1.1'],
    [1000, '1.1'],
    [999, '1.12'],
    [100, '1.12'],
    [99, '1.123'],
    [10, '1.123'],
    [9, '1.1234'],
    [1, '1.1234'],
  ])(
    'format score correctly when score per hour %d',
    (scorePerHour, expectedScore) => {
      expect(formatScore(1.12341234, scorePerHour)).toBe(expectedScore)
    },
  )
})
