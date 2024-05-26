'use client'

import { Badge, Tooltip } from '@mantine/core'
import { Card, Button } from '@mantine/core'
import { DomainValue } from '~/app/_components/domain-value/domain-value'
import {
  IconBuildingBank,
  IconBuildingWarehouse,
  IconGrowth,
  IconHome,
  type TablerIconsProps,
} from '@tabler/icons-react'
import { BuildingType } from '~/util/enums'
import { api } from '~/trpc/react'
import { notifications } from '@mantine/notifications'
import { type EnhancedBuilding } from '~/server/app/models/building'

const BUILDINGS: Record<
  BuildingType,
  { name: string; icon: (props: TablerIconsProps) => JSX.Element }
> = {
  [BuildingType.TOWN_HALL]: {
    name: 'Town hall',
    icon: IconBuildingBank,
  },
  [BuildingType.HOUSE]: {
    name: 'House',
    icon: IconHome,
  },
  [BuildingType.FARM]: {
    name: 'Farm',
    icon: IconGrowth,
  },
  [BuildingType.WAREHOUSE]: {
    name: 'Warehouse',
    icon: IconBuildingWarehouse,
  },
}

type BuldingCardProps = {
  building: EnhancedBuilding
}

export function BuildingCard({ building }: BuldingCardProps) {
  const { name: buildingName, icon: BuildingIcon } =
    BUILDINGS[building.type as BuildingType]
  const utils = api.useUtils()
  const createBuilding = api.building.create.useMutation({
    onSuccess: async () => {
      notifications.show({
        color: 'green',
        message: `Building ${buildingName} was built`,
      })
      void utils.building.index.invalidate()
      void utils.user.get.invalidate()
    },
  })

  const isLoading = createBuilding.isLoading

  return (
    <Card className="flex justify-center items-center gap-1 p-5 rounded-lg h-40 w-40 relative">
      {building.buildCost > 0 && (
        <div className="absolute top-0 right-0 flex items-start">
          <Tooltip className="bg-zinc-800 text-zinc-100" label="Level">
            <Badge className="bg-transparent border border-zinc-600">
              {building.level}
            </Badge>
          </Tooltip>
        </div>
      )}

      {building.info && (
        <div className="absolute top-0 left-0 flex items-start">
          <Tooltip className="bg-zinc-800 text-zinc-100" label="Info">
            <Badge className="bg-transparent border border-zinc-600">
              {building.level}
            </Badge>
          </Tooltip>
        </div>
      )}

      <div className="flex justify-center items-center gap-1">
        <BuildingIcon />
        {buildingName}
      </div>

      {building.buildCost > 0 && (
        <>
          <DomainValue value={100} currency="RP" />
          <Button
            loading={isLoading}
            onClick={() => createBuilding.mutate({ type: building.type })}
            className="mt-1"
            size="sm"
            color="orange"
          >
            Build
          </Button>
        </>
      )}
    </Card>
  )
}
