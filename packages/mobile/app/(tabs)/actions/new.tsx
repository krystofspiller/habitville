import { SafeAreaView } from 'react-native'
import { useAppForm } from '~/lib/utils/form'
import { z } from 'zod'
import { Form } from '~/components/form/form'

export default function NewAction() {
  const form = useAppForm({
    defaultValues: {
      name: '',
      effect: 0,
    },
    validators: {
      onChange: z.object({
        name: z.string(),
        effect: z.number({ coerce: true }),
      }),
    },
    onSubmit: ({ value }) => {
      // TODO: submit the form
      console.log('DEBUG', value, 'JSON', JSON.stringify(value, null, 2))
    },
  })

  return (
    <SafeAreaView className="flex m-4">
      <Form form={form}>
        <form.AppField
          name="name"
          children={(field) => <field.TextField label="Action name" />}
        />
        <form.AppField
          name="effect"
          children={(field) => <field.NumberField label="Reward" />}
        />
        <form.AppForm>
          <form.SubmitButton />
        </form.AppForm>
      </Form>
    </SafeAreaView>
  )
}
