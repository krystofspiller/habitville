import { SafeAreaView } from 'react-native'
import { useAppForm } from '~/lib/utils/form'
import { z } from 'zod'
import { Form } from '~/components/form/form'
import { useMutation } from 'convex/react'
import { api } from '~/convex/_generated/api'
import { useRouter } from 'expo-router'

export default function NewAction() {
  const router = useRouter()
  const createAction = useMutation(api.actions.createAction)

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
    onSubmit: async ({ value }) => {
      await createAction({ name: value.name, effect: value.effect })
      router.back()
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
