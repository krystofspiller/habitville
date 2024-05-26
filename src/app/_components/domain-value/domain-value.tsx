'use client'

import { Tooltip } from '@mantine/core'
import { IconPointFilled } from '@tabler/icons-react'
import { Fragment } from 'react'

type AcceptedCurrency = 'RP' | 'XP'

export function DomainValue({
  value,
  currency = 'RP',
  showCurrencyLabel = false,
}: {
  value: number
  currency?: AcceptedCurrency | AcceptedCurrency[]
  showCurrencyLabel?: boolean
}) {
  const getClassName = (currency: AcceptedCurrency) =>
    currency === 'RP' ? 'text-blue-600' : 'text-violet-600'

  const tooltipLabel = Array.isArray(currency)
    ? `Get ${value} ${currency.join(` and ${value} `)}`
    : null

  return (
    <Tooltip
      disabled={!tooltipLabel}
      label={tooltipLabel}
      className="text-zinc-100 bg-zinc-800"
    >
      <div className="flex items-center">
        {(Array.isArray(currency) ? currency : [currency]).map((c) => (
          <Fragment key={c}>
            <div className={`${getClassName(c)} flex items-center -ml-1.5`}>
              <IconPointFilled />
            </div>
            {showCurrencyLabel ? `${c}: ` : ''}
          </Fragment>
        ))}
        {value}
      </div>
    </Tooltip>
  )
}
