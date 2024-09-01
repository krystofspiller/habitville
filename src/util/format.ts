// Minimal score per hour is 1. At that point, in order to see a movement every second
// we would need to have 4 digits as at this point 10000 units / 3600 seconds > 1. Every
// order of magnitude we can decrease the digits by 1.
function getFractionDigits(scorePerHour: number): number {
  return Math.max(0, 4 - Math.floor(Math.log10(scorePerHour)))
}

function formatScore(value: number, scorePerHour: number): string {
  const fractionDigits = getFractionDigits(scorePerHour)
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  }).format(value)
}

export { formatScore }
