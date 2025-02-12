'use client'

import { Loader, Progress, Tooltip } from '@mantine/core'
import { useDebouncedValue } from '@mantine/hooks'
import { DomainValue } from '~/app/_components/domain-value/domain-value'
import { api } from '~/trpc/react'

export function ValueBar() {
  const user = api.user.get.useQuery()
  const [isRefetchingDebounced] = useDebouncedValue(user.isRefetching, 200)

  if (!user.data || isRefetchingDebounced) {
    return (
      <div className="flex justify-center w-full min-h-7 items-center">
        <Loader size={24} color="orange" />
      </div>
    )
  }

  const levelInfo = user.data.levelInfo

  return (
    <div className="flex justify-between w-full min-h-7 items-center">
      <Tooltip label="Realized potential" className="text-zinc-100 bg-zinc-800">
        <div>
          <DomainValue
            value={user.data.balance}
            currency="RP"
            showCurrencyLabel
          />
        </div>
      </Tooltip>
      <div className="flex items-center gap-2">
        Level: {levelInfo.level}
        <Tooltip
          label={`${levelInfo.currentLevelXpProgressAbs} / ${levelInfo.xpNeededForNextLevel}`}
          className="bg-zinc-800 text-zinc-100"
        >
          <div className="w-24">
            <Progress
              classNames={{ section: 'bg-violet-600' }}
              value={levelInfo.currentLevelXpProgressPct}
            />
          </div>
        </Tooltip>
      </div>
      <div className="flex items-center gap-2">Score: {user.data.score}</div>
    </div>
  )
}
