import { BuildingType, type Building } from '@prisma/client'
import { _enhanceBuilding } from '~/server/app/models/building'

const MOCK_TOWN_HALL: Building = {
  id: 1,
  createdById: '1',
  type: BuildingType.TOWN_HALL,
  level: 1,
  quantity: 1,
}

const MOCK_WAREHOUSE: Building = {
  id: 1,
  createdById: '1',
  type: BuildingType.WAREHOUSE,
  level: 1,
  quantity: 1,
}

function getMockTownHall({ level = 1 }: { level?: number } = {}) {
  const building = {
    ...MOCK_TOWN_HALL,
    level,
  }
  return _enhanceBuilding(building, [building])
}

function getMockWarehouse({
  level = 1,
  quantity = 1,
}: {
  level?: number
  quantity?: number
} = {}) {
  const building = {
    ...MOCK_WAREHOUSE,
    level,
    quantity,
  }
  return _enhanceBuilding(building, [building])
}

export { getMockTownHall, getMockWarehouse }
