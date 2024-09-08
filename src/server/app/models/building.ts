import { BuildingType, type Building } from '@prisma/client'
import { BUILDINGS } from '~/app/_components/buildings-table/buildings-utils'

type BuildCostAndInfo = { buildCost: number; buildInfo?: string }
type UpgradeCostAndInfo = { upgradeCost: number; upgradeInfo?: string }
type EnhancedBuilding = Omit<Building, 'type'> & {
  type: BuildingType
  scoreGeneration: number
} & BuildCostAndInfo &
  UpgradeCostAndInfo

const unbuiltBuilding = (buildingType: BuildingType): Building => ({
  id: -1,
  createdById: '-1',
  type: buildingType,
  quantity: 0,
  level: 0,
})

function _enhanceBuilding(
  building: Building,
  buildings: Array<Building>,
): EnhancedBuilding {
  return {
    ...building,
    ...getBuildCost(building, buildings),
    ...getUpgradeCost(),
    ...getBuildingScoreGeneration(building),
  }
}

function getUserBuildings(buildings: Array<Building>): Array<EnhancedBuilding> {
  let isTownHallBuilt = true
  if (buildings.length === 0) {
    buildings.push(unbuiltBuilding(BuildingType.TOWN_HALL))
    isTownHallBuilt = false
  }

  if (buildings.length === 1 && isTownHallBuilt) {
    buildings.push(unbuiltBuilding(BuildingType.HOUSE))
    buildings.push(unbuiltBuilding(BuildingType.FARM))
    buildings.push(unbuiltBuilding(BuildingType.WAREHOUSE))
  }

  return buildings.map((building) => _enhanceBuilding(building, buildings))
}

function getBuildCost(
  building: Building,
  buildings: Array<Building>,
): BuildCostAndInfo {
  switch (building.type) {
    case BuildingType.TOWN_HALL:
      return building.quantity === 0
        ? { buildCost: 10 }
        : { buildCost: -1, buildInfo: 'Town hall already built' }
    case BuildingType.HOUSE:
      return { buildCost: Math.pow(1.25, building.quantity) * 100 }
    case BuildingType.FARM:
      return (buildings.find((building) => building.type === BuildingType.HOUSE)
        ?.quantity ?? -1) > building.quantity
        ? { buildCost: Math.pow(1.3, building.quantity) * 100 }
        : { buildCost: -1, buildInfo: 'Build more houses' }
    case BuildingType.WAREHOUSE:
      return { buildCost: Math.pow(1.5, building.quantity) * 150 }
    default:
      return { buildCost: -1 }
  }
}

function getUpgradeCost(): UpgradeCostAndInfo {
  return { upgradeCost: -1, upgradeInfo: 'Upgrade not implemented' }
}

function getBuildingScoreGeneration(building: Building): {
  scoreGeneration: number
} {
  if (building.type === BuildingType.WAREHOUSE) {
    return { scoreGeneration: 0 }
  }

  const quantityFactor = building.quantity
  if (building.type === BuildingType.FARM) {
    return { scoreGeneration: 5 * quantityFactor }
  }

  return { scoreGeneration: 1 * quantityFactor }
}

function getScoreGeneration(buildings: Array<EnhancedBuilding>) {
  const skippableBuildings: BuildingType[] = [BuildingType.WAREHOUSE]
  return buildings.reduce(
    (acc, building) => {
      if (skippableBuildings.includes(building.type)) {
        return acc
      }

      acc.breakdown.push({
        scorePerHour: building.scoreGeneration,
        name: `${BUILDINGS[building.type].name.toLowerCase()}${building.quantity > 1 ? 's' : ''}`,
      })
      acc.scorePerHour += building.scoreGeneration

      return acc
    },
    {
      breakdown: [] as { scorePerHour: number; name: string }[],
      scorePerHour: 0,
    },
  )
}

function getWarehouseCap(buildings: Array<Building>): number {
  return buildings.reduce((acc, building) => {
    if (building.type === BuildingType.WAREHOUSE) {
      return acc + building.quantity * 100 * Math.pow(1.5, building.level - 1)
    } else if (building.type === BuildingType.TOWN_HALL) {
      return acc + 10
    }

    return acc
  }, 0)
}

export {
  _enhanceBuilding,
  getScoreGeneration,
  getUserBuildings,
  getWarehouseCap,
}
export type { EnhancedBuilding }
