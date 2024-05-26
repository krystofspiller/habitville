'use client'

import { Grid, GridCol, Loader, Title } from '@mantine/core'
import { BuildingCard } from '~/app/_components/building-card/building-card'
import { ScoreCard } from '~/app/_components/score-card/score-card'
import { api } from '~/trpc/react'

const useBuildingCards = () => {
  const buildings = api.building.index.useQuery()
  const isLoading = buildings.isLoading

  const buildingCards = [...(buildings.data ? buildings.data : [])].map(
    (building) => (
      <GridCol key={building.id} span={{ base: 4 }}>
        <BuildingCard building={building} />
      </GridCol>
    ),
  )
  return {
    buildingCards,
    isLoading,
  }
}

export default function Page() {
  const { buildingCards, isLoading } = useBuildingCards()

  return (
    <div className="flex flex-col gap-1">
      <Title size="h3">Ville</Title>
      <ScoreCard />
      <Grid>
        {isLoading ? (
          <Loader size={24} color="orange" />
        ) : buildingCards ? (
          <>{buildingCards}</>
        ) : (
          'No buildings'
        )}
      </Grid>
    </div>
  )
}
