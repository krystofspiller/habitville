import { BuildingType } from '@prisma/client'
import { z } from 'zod'

const buildingNewPayloadSchema = z.object({
  type: z.nativeEnum(BuildingType),
})

export { buildingNewPayloadSchema }
