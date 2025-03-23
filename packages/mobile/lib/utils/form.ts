import { createFormHook } from '@tanstack/react-form'
import { SubmitButton } from '~/components/form/submitButton'
import { TextField } from '~/components/form/textField'
import { NumberField } from '~/components/form/numberField'
import { fieldContext, formContext } from '~/lib/utils/formContexts'

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
