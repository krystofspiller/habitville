import { type BuildingType, type Building, type User } from '@prisma/client'
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
  user?: User
}

function getMockUser(): User {
  return {
    name: 'Mock User',
    id: '1',
    email: 'mock@example.com',
    emailVerified: new Date(2024, 0, 1),
    image: null,
    balance: 1001,
    xp: 1002,
    score: 1003,
    scoreCollectedAt: new Date(2024, 0, 1),
  }
}

function getMockBuilding<
  T extends true | false,
  R = T extends true ? Building : EnhancedBuilding,
>(
  buildingType: BuildingType,
  options: GetMockBuildingOptions<T> = {
    skipEnhance: false as T,
    user: getMockUser(),
  },
): R {
  options.user = options.user ?? getMockUser()

  if (options?.unbuilt) {
    const unbuilt = unbuiltBuilding(buildingType)
    return (
      options.skipEnhance
        ? unbuilt
        : enhanceBuilding(unbuilt, [unbuilt], options.user)
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
  delete building.user

  return (
    options.skipEnhance
      ? building
      : enhanceBuilding(building, [building], options.user)
  ) as R
}

export { getMockUser, getMockBuilding }
