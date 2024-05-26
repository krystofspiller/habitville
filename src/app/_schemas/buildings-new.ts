import { z } from 'zod'

const buildingNewPayloadSchema = z.object({
  // TODO: must be Buiilding enum
  type: z
    .number()
    .int()
    .refine((value) => value > 0, { message: 'Cannot be 0' }),
})

export { buildingNewPayloadSchema }
