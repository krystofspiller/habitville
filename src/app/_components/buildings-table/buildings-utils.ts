import { BuildingType } from '@prisma/client'
import {
  IconBuildingBank,
  IconBuildingWarehouse,
  IconGrowth,
  IconHome,
  type IconProps,
} from '@tabler/icons-react'
import { type ReactNode } from 'react'

const BUILDINGS: Record<
  BuildingType,
  { name: string; icon: (props: IconProps) => ReactNode }
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

export { BUILDINGS }
