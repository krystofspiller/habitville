import { z } from 'zod'
import { zodRequiredString } from '~/util/zod'

const actionNewPayloadSchema = z.object({
  name: zodRequiredString('name'),
  cost: z
    .number()
    .int()
    .refine((value) => value !== 0, { message: 'Cannot be 0' }),
})

export { actionNewPayloadSchema }
