'use client'

import { Button, NumberInput, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { IconPlus } from '@tabler/icons-react'
import { type z } from 'zod'
import { zodResolver } from 'mantine-form-zod-resolver'
import { api } from '~/trpc/react'
import { actionNewPayloadSchema } from '~/app/_schemas/actions-new'
import { notifications } from '@mantine/notifications'
import { navigate } from '~/app/navigate'

type ActionNewPayloadSchema = z.infer<typeof actionNewPayloadSchema>

export default function Page() {
  const createAction = api.action.create.useMutation({
    onSuccess: async () => {
      notifications.show({
        color: 'green',
        message: `Action ${form.values.name} was created`,
      })
      await navigate('/dashboard')
    },
  })

  const isLoading = createAction.isPending

  const form = useForm({
    initialValues: {
      name: '',
      cost: 0,
    },
    validate: zodResolver(actionNewPayloadSchema),
  })

  const costLabel =
    form.values.cost === 0
      ? 'Reward / Cost'
      : form.values.cost > 0
        ? 'Reward'
        : 'Cost'

  const onSubmit = (values: ActionNewPayloadSchema) => {
    createAction.mutate(values)
  }

  return (
    <div className="flex justify-center w-full">
      <form
        className="flex flex-col gap-2 w-96"
        onSubmit={form.onSubmit(onSubmit)}
      >
        <TextInput
          withAsterisk
          label="Name"
          placeholder="Do pushups; Read a book; etc."
          disabled={isLoading}
          {...form.getInputProps('name')}
        />

        <NumberInput
          withAsterisk
          label={costLabel}
          description="Use positive numbers for rewards and negative for costs"
          placeholder="5"
          disabled={isLoading}
          {...form.getInputProps('cost')}
        />

        <div className="flex mt-2 justify-end">
          <Button
            leftSection={<IconPlus size={14} />}
            variant="filled"
            color="orange"
            type="submit"
            loading={isLoading}
          >
            Create action
          </Button>
        </div>
      </form>
    </div>
  )
}

export { actionNewPayloadSchema }
