'use client'

import { Card, Button, Tooltip, Loader } from '@mantine/core'
import { notifications } from '@mantine/notifications'
import { IconHelp } from '@tabler/icons-react'
import { useState } from 'react'
import { getScoreGeneration } from '~/server/app/models/building'
import { calculateAccumulatedScore } from '~/server/app/models/user'
import { api } from '~/trpc/react'
import { formatScore } from '~/util/format'
import { useCountUp } from 'use-count-up'

export function ScoreCard() {
  const [now] = useState(new Date())
  const { value: secondsElapsed } = useCountUp({
    isCounting: true,
    decimalPlaces: 4,
  })
  const utils = api.useUtils()
  const user = api.user.get.useQuery()
  const markCompletedMutation = api.user.collectScore.useMutation({
    onSuccess: () => {
      notifications.show({
        color: 'green',
        message: `Score collected!`,
      })
      void utils.user.get.invalidate()
      void utils.action.index.invalidate()
    },
  })
  const { data: buildings, isLoading } = api.building.index.useQuery()

  if (isLoading || !buildings) {
    return null
  }

  const { breakdown, scorePerHour } = getScoreGeneration(buildings)
  const requestTime = new Date(now.getTime() + Number(secondsElapsed) * 1000)
  const accumulatedScore = user.data?.scoreCollectedAt
    ? calculateAccumulatedScore(
        user.data?.scoreCollectedAt,
        user.data?.warehouseCap,
        scorePerHour,
        requestTime,
      )
    : 0

  return (
    <Card className="p-5 rounded-lg w-72">
      {!user.data ? (
        <Loader size={24} color="orange" />
      ) : (
        <>
          <div className="flex justify-between mb-2">
            <div className="flex items-center gap-1">
              <span className="font-medium">Score to collect</span>
              <Tooltip
                label={
                  <span>
                    Currently getting {scorePerHour} score per hour.
                    <br />
                    Breakdown:
                    <br />
                    <ul className="m-0 mt-1 pl-4">
                      {breakdown.map(({ scorePerHour, name }) => (
                        <li key={name}>
                          {scorePerHour} from {name}
                        </li>
                      ))}
                    </ul>
                  </span>
                }
                className="text-zinc-100 bg-zinc-800"
              >
                <IconHelp size={24} />
              </Tooltip>
            </div>

            <Tooltip
              disabled={accumulatedScore >= 1}
              label="It is possible to collect score only when you have at least 1 score to collect"
              className="text-zinc-100 bg-zinc-800"
            >
              <div>
                <Button
                  size="compact-sm"
                  color="orange"
                  onClick={() => markCompletedMutation.mutate()}
                  disabled={accumulatedScore < 1}
                >
                  Collect
                </Button>
              </div>
            </Tooltip>
          </div>

          <div className="text-xl text-bold">
            <div className="flex items-center justify-between">
              <div>{formatScore(accumulatedScore, scorePerHour)}</div>
              <div>/ {user.data.warehouseCap}</div>
            </div>
          </div>
        </>
      )}
    </Card>
  )
}
