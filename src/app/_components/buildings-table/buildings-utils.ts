import {
  IconBuildingBank,
  IconBuildingWarehouse,
  IconGrowth,
  IconHome,
  type TablerIconsProps,
} from '@tabler/icons-react'
import { BuildingType } from '~/util/enums'

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

export { BUILDINGS }
