import { test } from 'vitest'
import {
  type EnhancedBuilding,
  getUserBuildings,
  getScoreGeneration,
  getWarehouseCap,
} from '~/server/app/models/building'
import {
  getMockTownHall,
  getMockWarehouse,
} from '~/server/app/models/test-data'
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
  'town hall': [getMockTownHall()],
  'upgraded town hall': [getMockTownHall({ level: 10 })],
  'town hall and one warehouse': [getMockTownHall(), getMockWarehouse()],
  'town hall and one upgraded warehouse': [
    getMockTownHall(),
    getMockWarehouse({ level: 2 }),
  ],
  'town hall and multiple warehouses': [
    getMockTownHall(),
    getMockWarehouse({ quantity: 10 }),
  ],
  'upgraded town hall and multiple upgraded warehouses': [
    getMockTownHall({ level: 10 }),
    getMockWarehouse({ level: 3, quantity: 10 }),
  ],
}

export const aTest = test.extend<{
  buildings: Record<BuildingConfigurationKey, Array<EnhancedBuilding>>
}>({
  buildings: async ({}, use) => {
    await use(buildingConfigurations)
  },
})

describe('building model', () => {
  describe('getScoreGeneration', () => {
    aTest.for(
      buildForCases(buildingConfigurations, [
        {
          breakdown: [],
          scorePerHour: 0,
        },
        {
          breakdown: [
            {
              name: 'town hall',
              scorePerHour: 1,
            },
          ],
          scorePerHour: 1,
        },
        {
          breakdown: [
            {
              name: 'town hall',
              scorePerHour: 1,
            },
          ],
          scorePerHour: 1,
        },
        {
          breakdown: [
            {
              name: 'town hall',
              scorePerHour: 1,
            },
          ],
          scorePerHour: 1,
        },
        {
          breakdown: [
            {
              name: 'town hall',
              scorePerHour: 1,
            },
          ],
          scorePerHour: 1,
        },
        {
          breakdown: [
            {
              name: 'town hall',
              scorePerHour: 1,
            },
          ],
          scorePerHour: 1,
        },
        {
          breakdown: [
            {
              name: 'town hall',
              scorePerHour: 1,
            },
          ],
          scorePerHour: 1,
        },
      ]),
    )('when %s', ([testName, expected], { buildings }) => {
      expect(getScoreGeneration(buildings[testName])).toEqual(expected)
    })
  })

  describe.only('getUserBuildings', () => {
    aTest.for(
      buildForCases(buildingConfigurations, [{}, {}, {}, {}, {}, {}, {}]),
    )('when %s', ([testName, expectedCap], { buildings }) => {
      expect(getUserBuildings(buildings[testName])).toEqual(expectedCap)
    })
  })

  describe('getWarehouseCap', () => {
    aTest.for(
      buildForCases(buildingConfigurations, [0, 10, 10, 110, 160, 1010, 2260]),
    )('when %s', ([testName, expectedCap], { buildings }) => {
      expect(getWarehouseCap(buildings[testName])).toEqual(expectedCap)
    })
  })
})
