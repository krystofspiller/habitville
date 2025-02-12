import { z } from 'zod'
import capitalize from 'lodash.capitalize'

const zodRequiredString = (fieldName?: string) =>
  z.string().min(1, {
    message: capitalize(`${fieldName ?? ''} cannot be empty`.trim()),
  })

export { zodRequiredString }
