function calculateAccumulatedScore(
  collectedAt: Date,
  userWarehouseCap: number,
  scorePerHour: number,
  requestTime?: Date,
) {
  // TODO client timezone issue?
  const now = requestTime ?? new Date()

  const diff = now.getTime() - collectedAt.getTime()

  const hours = diff / 1000.0 / 60.0 / 60.0

  const accumulatedScore = Math.min(userWarehouseCap, scorePerHour * hours)

  return accumulatedScore
}

function getCollectScoreInfo(
  collectedAt: Date,
  userWarehouseCap: number,
  scorePerHour: number,
  now: Date,
) {
  const accumulatedExactScore = calculateAccumulatedScore(
    collectedAt,
    userWarehouseCap,
    scorePerHour,
    now,
  )

  const accumulatedScore = Math.floor(accumulatedExactScore)

  // assumes warehouse cap is an integer
  if (accumulatedScore === userWarehouseCap) {
    return {
      accumulatedScore,
      collectedAt: now,
    }
  }

  const time = (accumulatedScore / scorePerHour) * 60 * 60 * 1000

  const collectedAtTime = new Date(collectedAt.getTime() + time)

  return {
    accumulatedScore,
    collectedAt: collectedAtTime,
  }
}

export { calculateAccumulatedScore, getCollectScoreInfo }
