import { createFormHook, createFormHookContexts } from '@tanstack/react-form'
import { SubmitButton } from '~/components/form/submitButton'
import { TextField } from '~/components/form/textField'
import { NumberField } from '~/components/form/numberField'

export const { fieldContext, useFieldContext, formContext, useFormContext } =
  createFormHookContexts()

const { useAppForm } = createFormHook({
  fieldComponents: {
    TextField,
    NumberField,
  },
  formComponents: {
    SubmitButton,
  },
  fieldContext,
  formContext,
})

export { useAppForm }
