'use client'

import { Loader, Title } from '@mantine/core'
import { BuildingsTable } from '~/app/_components/buildings-table/buildings-table'
import { ScoreCard } from '~/app/_components/score-card/score-card'
import { api } from '~/trpc/react'

export default function Page() {
  const buildings = api.building.index.useQuery()
  const isLoading = buildings.isLoading

  return (
    <div className="flex flex-col gap-1">
      <Title size="h3">Ville</Title>
      {isLoading || !buildings.data ? (
        <Loader size={24} color="orange" />
      ) : (
        <>
          <ScoreCard buildings={buildings.data} />
          <BuildingsTable buildings={buildings.data} />
        </>
      )}
    </div>
  )
}
