import { BuildingType, type Building } from '@prisma/client'
import { BUILDINGS } from '~/app/_components/buildings-table/buildings-utils'

type BuildCost =
  | { buildCost: number; unbuildableReason?: never }
  | { buildCost?: never; unbuildableReason: string }
type UpgradeCostAndInfo = { upgradeCost: number; upgradeInfo?: string }
type ScoreGeneration = { scorePerHour: number }
type EnhancedBuilding = Building &
  ScoreGeneration &
  BuildCost &
  UpgradeCostAndInfo

const unbuiltBuilding = (buildingType: BuildingType): Building => ({
  id: -1,
  createdById: '-1',
  type: buildingType,
  quantity: 0,
  level: 0,
})

function enhanceBuilding(
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
  const builtBuildings = buildings.reduce((acc, building) => {
    acc.push(building.type)
    return acc
  }, [] as Array<BuildingType>)

  if (!builtBuildings.includes(BuildingType.TOWN_HALL)) {
    buildings.push(unbuiltBuilding(BuildingType.TOWN_HALL))
  }

  if (builtBuildings.includes(BuildingType.TOWN_HALL)) {
    if (!builtBuildings.includes(BuildingType.HOUSE)) {
      buildings.push(unbuiltBuilding(BuildingType.HOUSE))
    }
    if (!builtBuildings.includes(BuildingType.FARM)) {
      buildings.push(unbuiltBuilding(BuildingType.FARM))
    }
    if (!builtBuildings.includes(BuildingType.WAREHOUSE)) {
      buildings.push(unbuiltBuilding(BuildingType.WAREHOUSE))
    }
  }

  return buildings.map((building) => enhanceBuilding(building, buildings))
}

function getBuildCost(
  building: Building,
  buildings: Array<Building>,
): BuildCost {
  switch (building.type) {
    case BuildingType.TOWN_HALL:
      return building.quantity === 0
        ? { buildCost: 10 }
        : { unbuildableReason: 'Town hall already built' }
    case BuildingType.HOUSE:
      return {
        buildCost: Math.round(Math.pow(1.3, building.quantity) * 10),
      }
    case BuildingType.FARM:
      return (buildings.find((building) => building.type === BuildingType.HOUSE)
        ?.quantity ?? -1) >
        building.quantity * 3
        ? { buildCost: Math.round(Math.pow(2, building.quantity * 1.2) * 20) }
        : { unbuildableReason: 'Build more houses' }
    case BuildingType.WAREHOUSE:
      return { buildCost: Math.round(Math.pow(2, building.quantity) * 15) }
    default:
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      throw new Error(`Unexpected type ${building.type}`)
  }
}

function getUpgradeCost(): UpgradeCostAndInfo {
  return { upgradeCost: -1, upgradeInfo: 'Upgrade not implemented' }
}

function getBuildingScoreGeneration(building: Building): ScoreGeneration {
  if (building.type === BuildingType.WAREHOUSE) {
    return { scorePerHour: 0 }
  }

  const quantityFactor = building.quantity
  if (building.type === BuildingType.FARM) {
    return { scorePerHour: 5 * quantityFactor }
  }

  return { scorePerHour: 1 * quantityFactor }
}

function getScoreGeneration(buildings: Array<EnhancedBuilding>) {
  const skippableBuildings: BuildingType[] = [BuildingType.WAREHOUSE]
  return buildings.reduce(
    (acc, building) => {
      if (skippableBuildings.includes(building.type)) {
        return acc
      }

      acc.breakdown.push({
        scorePerHour: building.scorePerHour,
        name: `${BUILDINGS[building.type].name.toLowerCase()}${building.quantity > 1 ? 's' : ''}`,
      })
      acc.scorePerHour += building.scorePerHour

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
  enhanceBuilding,
  unbuiltBuilding,
  getBuildCost,
  getUpgradeCost,
  getBuildingScoreGeneration,
  getScoreGeneration,
  getUserBuildings,
  getWarehouseCap,
}
export type { EnhancedBuilding }
