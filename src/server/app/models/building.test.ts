import { BuildingType } from '@prisma/client'
import { test } from 'vitest'
import { BUILDINGS } from '~/app/_components/buildings-table/buildings-utils'
import {
  type EnhancedBuilding,
  getUserBuildings,
  getScoreGeneration,
  getWarehouseCap,
  enhanceBuilding,
  unbuiltBuilding,
  getBuildCost,
  getUpgradeCost,
  getBuildingScoreGeneration,
} from '~/server/app/models/building'
import { getMockBuilding, getMockUser } from '~/server/app/models/test-data'
import { buildForCases } from '~/util/test-util'

type BuildingConfigurationKey =
  | 'no buildings'
  | 'town hall'
  | 'upgraded town hall'
  | 'town hall and one warehouse'
  | 'town hall and one upgraded warehouse'
  | 'town hall and multiple warehouses'
  | 'upgraded town hall and multiple upgraded warehouses'
const buildingConfigurations: Record<
  BuildingConfigurationKey,
  Array<EnhancedBuilding>
> = {
  'no buildings': [],
  'town hall': [getMockBuilding(BuildingType.TOWN_HALL)],
  'upgraded town hall': [
    getMockBuilding(BuildingType.TOWN_HALL, { level: 10 }),
  ],
  'town hall and one warehouse': [
    getMockBuilding(BuildingType.TOWN_HALL),
    getMockBuilding(BuildingType.WAREHOUSE),
  ],
  'town hall and one upgraded warehouse': [
    getMockBuilding(BuildingType.TOWN_HALL),
    getMockBuilding(BuildingType.WAREHOUSE, { level: 2 }),
  ],
  'town hall and multiple warehouses': [
    getMockBuilding(BuildingType.TOWN_HALL),
    getMockBuilding(BuildingType.WAREHOUSE, { quantity: 10 }),
  ],
  'upgraded town hall and multiple upgraded warehouses': [
    getMockBuilding(BuildingType.TOWN_HALL, { level: 10 }),
    getMockBuilding(BuildingType.WAREHOUSE, { level: 3, quantity: 10 }),
  ],
}

describe('building model', () => {
  const aTest = test.extend<{
    buildings: Record<BuildingConfigurationKey, Array<EnhancedBuilding>>
    // eslint-disable-next-line @vitest/valid-title
  }>({
    buildings: async ({}, use) => {
      await use(
        JSON.parse(JSON.stringify(buildingConfigurations)) as Record<
          BuildingConfigurationKey,
          Array<EnhancedBuilding>
        >,
      )
    },
  })

  describe('public interface', () => {
    describe('getScoreGeneration', () => {
      aTest.for(
        buildForCases<
          BuildingConfigurationKey,
          ReturnType<typeof getScoreGeneration>
        >({
          'no buildings': {
            breakdown: [],
            scorePerHour: 0,
          },
          'town hall': {
            breakdown: [
              {
                name: 'town hall',
                scorePerHour: 1,
              },
            ],
            scorePerHour: 1,
          },
          'upgraded town hall': {
            breakdown: [
              {
                name: 'town hall',
                scorePerHour: 1,
              },
            ],
            scorePerHour: 1,
          },
          'town hall and one warehouse': {
            breakdown: [
              {
                name: 'town hall',
                scorePerHour: 1,
              },
            ],
            scorePerHour: 1,
          },
          'town hall and one upgraded warehouse': {
            breakdown: [
              {
                name: 'town hall',
                scorePerHour: 1,
              },
            ],
            scorePerHour: 1,
          },
          'town hall and multiple warehouses': {
            breakdown: [
              {
                name: 'town hall',
                scorePerHour: 1,
              },
            ],
            scorePerHour: 1,
          },
          'upgraded town hall and multiple upgraded warehouses': {
            breakdown: [
              {
                name: 'town hall',
                scorePerHour: 1,
              },
            ],
            scorePerHour: 1,
          },
        }),
      )('when %s', ([testName, expected], { buildings }) => {
        expect(getScoreGeneration(buildings[testName])).toStrictEqual(expected)
      })
    })

    describe('getUserBuildings', () => {
      aTest.for(
        buildForCases<
          BuildingConfigurationKey,
          ReturnType<typeof getUserBuildings>
        >({
          'no buildings': [
            getMockBuilding(BuildingType.TOWN_HALL, { unbuilt: true }),
          ],
          'town hall': [
            getMockBuilding(BuildingType.TOWN_HALL),
            getMockBuilding(BuildingType.HOUSE, { unbuilt: true }),
            getMockBuilding(BuildingType.FARM, { unbuilt: true }),
            getMockBuilding(BuildingType.WAREHOUSE, { unbuilt: true }),
          ],
          'upgraded town hall': [
            getMockBuilding(BuildingType.TOWN_HALL, {
              level: buildingConfigurations['upgraded town hall'][0]!.level,
            }),
            getMockBuilding(BuildingType.HOUSE, { unbuilt: true }),
            getMockBuilding(BuildingType.FARM, { unbuilt: true }),
            getMockBuilding(BuildingType.WAREHOUSE, { unbuilt: true }),
          ],
          'town hall and one warehouse': [
            getMockBuilding(BuildingType.TOWN_HALL),
            getMockBuilding(BuildingType.WAREHOUSE),
            getMockBuilding(BuildingType.HOUSE, { unbuilt: true }),
            getMockBuilding(BuildingType.FARM, { unbuilt: true }),
          ],
          'town hall and one upgraded warehouse': [
            getMockBuilding(BuildingType.TOWN_HALL),
            getMockBuilding(BuildingType.WAREHOUSE, {
              level:
                buildingConfigurations[
                  'town hall and one upgraded warehouse'
                ][1]!.level,
            }),
            getMockBuilding(BuildingType.HOUSE, { unbuilt: true }),
            getMockBuilding(BuildingType.FARM, { unbuilt: true }),
          ],
          'town hall and multiple warehouses': [
            getMockBuilding(BuildingType.TOWN_HALL),
            getMockBuilding(BuildingType.WAREHOUSE, {
              quantity:
                buildingConfigurations['town hall and multiple warehouses'][1]!
                  .quantity,
            }),
            getMockBuilding(BuildingType.HOUSE, { unbuilt: true }),
            getMockBuilding(BuildingType.FARM, { unbuilt: true }),
          ],
          'upgraded town hall and multiple upgraded warehouses': [
            getMockBuilding(BuildingType.TOWN_HALL, {
              level:
                buildingConfigurations[
                  'upgraded town hall and multiple upgraded warehouses'
                ][0]!.level,
            }),
            getMockBuilding(BuildingType.WAREHOUSE, {
              level:
                buildingConfigurations[
                  'upgraded town hall and multiple upgraded warehouses'
                ][1]!.level,
              quantity:
                buildingConfigurations[
                  'upgraded town hall and multiple upgraded warehouses'
                ][1]!.quantity,
            }),
            getMockBuilding(BuildingType.HOUSE, { unbuilt: true }),
            getMockBuilding(BuildingType.FARM, { unbuilt: true }),
          ],
        }),
      )('when %s', ([testName, expected], { buildings }) => {
        expect(
          getUserBuildings(getMockUser(), buildings[testName]),
        ).toStrictEqual(expected)
      })
    })

    describe('getWarehouseCap', () => {
      aTest.for(
        buildForCases<
          BuildingConfigurationKey,
          ReturnType<typeof getWarehouseCap>
        >({
          'no buildings': 10,
          'town hall': 10,
          'upgraded town hall': 10,
          'town hall and one warehouse': 110,
          'town hall and one upgraded warehouse': 160,
          'town hall and multiple warehouses': 1010,
          'upgraded town hall and multiple upgraded warehouses': 2260,
        }),
      )('when %s', ([testName, expected], { buildings }) => {
        expect(getWarehouseCap(buildings[testName])).toStrictEqual(expected)
      })
    })
  })

  describe('private interface', () => {
    describe('enhanceBuilding', () => {
      test('should return an enhanced building', () => {
        const building = getMockBuilding(BuildingType.TOWN_HALL, {
          skipEnhance: true,
        })

        expect(
          enhanceBuilding(building, [building], getMockUser()),
        ).toStrictEqual({
          ...building,
          unbuildableReason: 'Town hall already built',
          upgradeCost: -1,
          upgradeInfo: 'Upgrade not implemented',
          scorePerHour: 1,
        })
      })

      test.each(
        Object.values(BuildingType).map((type) => {
          return [BUILDINGS[type].name, type]
        }),
      )(`should return an unbuilt building for %s`, (_, type) => {
        expect(unbuiltBuilding(type)).toStrictEqual({
          id: -1,
          createdById: '-1',
          type,
          quantity: 0,
          level: 0,
        })
      })
    })

    describe('getBuildCost', () => {
      test.each([
        [
          '0 town halls',
          getMockBuilding<true>(BuildingType.TOWN_HALL, {
            unbuilt: true,
            skipEnhance: true,
          }),
          [],
          { buildCost: 10 },
        ] as const,
        [
          '1 town hall',
          getMockBuilding<true>(BuildingType.TOWN_HALL, {
            quantity: 1,
            skipEnhance: true,
          }),
          [],
          { unbuildableReason: 'Town hall already built' },
        ],
        [
          '0 houses',
          getMockBuilding<true>(BuildingType.HOUSE, {
            unbuilt: true,
            skipEnhance: true,
          }),
          [],
          { buildCost: 10 },
        ],
        [
          '1 house',
          getMockBuilding<true>(BuildingType.HOUSE, {
            quantity: 1,
            skipEnhance: true,
          }),
          [],
          { buildCost: 13 },
        ],
        [
          '2 houses',
          getMockBuilding<true>(BuildingType.HOUSE, {
            quantity: 2,
            skipEnhance: true,
          }),
          [],
          { buildCost: 17 },
        ],
        [
          '10 houses',
          getMockBuilding<true>(BuildingType.HOUSE, {
            quantity: 10,
            skipEnhance: true,
          }),
          [],
          { buildCost: 138 },
        ],
        [
          '0 farms and 0 houses',
          getMockBuilding<true>(BuildingType.FARM, {
            unbuilt: true,
            skipEnhance: true,
          }),
          [
            getMockBuilding<true>(BuildingType.HOUSE, {
              unbuilt: true,
              skipEnhance: true,
            }),
          ],
          { unbuildableReason: 'Build more houses' },
        ],
        [
          '0 farms and 1 house',
          getMockBuilding<true>(BuildingType.FARM, {
            unbuilt: true,
            skipEnhance: true,
          }),
          [
            getMockBuilding<true>(BuildingType.HOUSE, {
              quantity: 1,
              skipEnhance: true,
            }),
          ],
          { buildCost: 20 },
        ],
        [
          '1 farm and 3 houses',
          getMockBuilding<true>(BuildingType.FARM, {
            quantity: 1,
            skipEnhance: true,
          }),
          [
            getMockBuilding<true>(BuildingType.HOUSE, {
              quantity: 3,
              skipEnhance: true,
            }),
          ],
          { unbuildableReason: 'Build more houses' },
        ],
        [
          '1 farm and 4 houses',
          getMockBuilding<true>(BuildingType.FARM, {
            quantity: 1,
            skipEnhance: true,
          }),
          [
            getMockBuilding<true>(BuildingType.HOUSE, {
              quantity: 4,
              skipEnhance: true,
            }),
          ],
          { buildCost: 46 },
        ],
        [
          '3 farms and 9 houses',
          getMockBuilding<true>(BuildingType.FARM, {
            quantity: 3,
            skipEnhance: true,
          }),
          [
            getMockBuilding<true>(BuildingType.HOUSE, {
              quantity: 9,
              skipEnhance: true,
            }),
          ],
          { unbuildableReason: 'Build more houses' },
        ],
        [
          '3 farms and 10 houses',
          getMockBuilding<true>(BuildingType.FARM, {
            quantity: 3,
            skipEnhance: true,
          }),
          [
            getMockBuilding<true>(BuildingType.HOUSE, {
              quantity: 10,
              skipEnhance: true,
            }),
          ],
          { buildCost: 243 },
        ],
        [
          '0 warehouses',
          getMockBuilding<true>(BuildingType.WAREHOUSE, {
            unbuilt: true,
            skipEnhance: true,
          }),
          [],
          { buildCost: 15 },
        ],
        [
          '1 warehouse',
          getMockBuilding<true>(BuildingType.WAREHOUSE, {
            quantity: 1,
            skipEnhance: true,
          }),
          [],
          { buildCost: 30 },
        ],
        [
          '3 warehouses',
          getMockBuilding<true>(BuildingType.WAREHOUSE, {
            quantity: 3,
            skipEnhance: true,
          }),
          [],
          { buildCost: 120 },
        ],
      ])('%s', (_, building, otherBuildings, expected) => {
        expect(
          getBuildCost(building, [...otherBuildings, building], getMockUser()),
        ).toStrictEqual(expected)
      })
    })

    describe('getUpgradeCost', () => {
      test('not implemented', () => {
        expect(getUpgradeCost()).toStrictEqual({
          upgradeCost: -1,
          upgradeInfo: 'Upgrade not implemented',
        })
      })
    })

    describe('getBuildingScoreGeneration', () => {
      test.each([
        [
          '0 town halls',
          getMockBuilding<true>(BuildingType.TOWN_HALL, {
            unbuilt: true,
            skipEnhance: true,
          }),
          { scorePerHour: 0 },
        ],
        [
          '1 town hall',
          getMockBuilding<true>(BuildingType.TOWN_HALL, {
            quantity: 1,
            skipEnhance: true,
          }),
          { scorePerHour: 1 },
        ],
        [
          '0 houses',
          getMockBuilding<true>(BuildingType.HOUSE, {
            unbuilt: true,
            skipEnhance: true,
          }),
          { scorePerHour: 0 },
        ],
        [
          '1 house',
          getMockBuilding<true>(BuildingType.HOUSE, {
            quantity: 1,
            skipEnhance: true,
          }),
          { scorePerHour: 1 },
        ],
        [
          '10 houses',
          getMockBuilding<true>(BuildingType.HOUSE, {
            quantity: 10,
            skipEnhance: true,
          }),
          { scorePerHour: 10 },
        ],
        [
          '0 farms',
          getMockBuilding<true>(BuildingType.FARM, {
            unbuilt: true,
            skipEnhance: true,
          }),
          { scorePerHour: 0 },
        ],
        [
          '1 farm',
          getMockBuilding<true>(BuildingType.FARM, {
            quantity: 1,
            skipEnhance: true,
          }),
          { scorePerHour: 5 },
        ],
        [
          '3 farms',
          getMockBuilding<true>(BuildingType.FARM, {
            quantity: 3,
            skipEnhance: true,
          }),
          { scorePerHour: 15 },
        ],
        [
          '0 warehouses',
          getMockBuilding<true>(BuildingType.WAREHOUSE, {
            unbuilt: true,
            skipEnhance: true,
          }),
          { scorePerHour: 0 },
        ],
        [
          '10 warehouses',
          getMockBuilding<true>(BuildingType.WAREHOUSE, {
            quantity: 10,
            skipEnhance: true,
          }),
          { scorePerHour: 0 },
        ],
      ])('%s', (_, building, expected) => {
        expect(getBuildingScoreGeneration(building)).toStrictEqual(expected)
      })
    })
  })
})
