import { z } from 'zod'
import { zodRequiredString } from '~/util/zod'

const actionNewPayloadSchema = z.object({
  name: zodRequiredString('name'),
  cost: z.number().int(),
})

export { actionNewPayloadSchema }
