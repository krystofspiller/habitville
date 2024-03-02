'use client'

import {
  IconPointFilled,
  IconSquareRoundedArrowDown,
  IconSquareRoundedArrowUp,
} from '@tabler/icons-react'

export function DomainValue({
  value,
  currency = 'RP',
  showIcon = false,
  showCurrencyLabel = false,
}: {
  value: number
  currency?: 'RP' | 'XP'
  showIcon?: boolean
  showCurrencyLabel?: boolean
}) {
  const className = currency === 'RP' ? 'text-blue-600' : 'text-orange-600'

  return (
    <div className="flex w-40 items-center">
      {showIcon && (
        <div
          className={`flex flex-row gap-1 ${value >= 0 ? 'text-blue-600' : 'text-red-600'}`}
        >
          {value >= 0 ? (
            <IconSquareRoundedArrowUp />
          ) : (
            <IconSquareRoundedArrowDown />
          )}
        </div>
      )}
      <div className={className}>
        <IconPointFilled />
      </div>
      {showCurrencyLabel ? `${currency}: ` : ''}
      {value}
    </div>
  )
}
