'use client'

import { Card, Button } from '@mantine/core'

export function ScoreCard() {
  return (
    <Card className="p-5 rounded-lg w-72">
      <div className="flex justify-between mb-2">
        <span className="font-medium">Accumulated score</span>
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
