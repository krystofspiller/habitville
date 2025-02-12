import { type BuildingType, type Building } from '@prisma/client'
import {
  enhanceBuilding,
  type EnhancedBuilding,
  unbuiltBuilding,
} from '~/server/app/models/building'

const MOCK_BASE_BUILDING = (type: BuildingType): Building => ({
  id: 1,
  createdById: '1',
  type,
  level: 1,
  quantity: 1,
})

type GetMockBuildingOptions<T extends true | false> = Partial<
  Exclude<EnhancedBuilding, 'id' | 'createdById' | 'type'>
> & {
  skipEnhance?: T
  unbuilt?: true
}

function getMockBuilding<
  T extends true | false,
  R = T extends true ? Building : EnhancedBuilding,
>(
  buildingType: BuildingType,
  options: GetMockBuildingOptions<T> = { skipEnhance: false as T },
): R {
  if (options?.unbuilt) {
    const unbuilt = unbuiltBuilding(buildingType)
    return (
      options.skipEnhance ? unbuilt : enhanceBuilding(unbuilt, [unbuilt])
    ) as R
  }

  if ((options?.quantity ?? 1) <= 0) {
    throw new Error('Quantity must be positive, use unbuilt option instead')
  }

  if ((options?.level ?? 1) <= 0) {
    throw new Error('Level must be positive')
  }

  const building = {
    ...MOCK_BASE_BUILDING(buildingType),
    ...options,
  }

  delete building.unbuilt
  delete building.skipEnhance

  return (
    options.skipEnhance ? building : enhanceBuilding(building, [building])
  ) as R
}

export { getMockBuilding }
