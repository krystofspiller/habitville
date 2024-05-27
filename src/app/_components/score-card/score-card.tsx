'use client'

import { Card, Button, Tooltip } from '@mantine/core'
import { IconHelp } from '@tabler/icons-react'

export function ScoreCard() {
  return (
    <Card className="p-5 rounded-lg w-72">
      <div className="flex justify-between mb-2">
        <div className="flex items-center gap-1">
          <span className="font-medium">Accumulated score</span>
          <Tooltip
            label={
              <span>
                Currently getting 12.5 score per hour.
                <br />
                Breakdown:
                <ul>
                  <li>5 from town hall</li>
                  <li>7.5 from farms</li>
                </ul>
              </span>
            }
            className="text-zinc-100 bg-zinc-800"
          >
            <IconHelp size={24} />
          </Tooltip>
        </div>
        <Button size="compact-sm" color="orange">
          Collect
        </Button>
      </div>

      <div className="text-xl text-bold">
        <div className="flex items-center justify-between">
          <div>5.23</div>
          <div>/ 100</div>
        </div>
      </div>
    </Card>
  )
}
