'use client'

import { TextInput, Button, NumberInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { IconPlus } from '@tabler/icons-react'

export default function Page() {
  const form = useForm({
    initialValues: {
      name: '',
      cost: 0,
    },
  })

  const costLabel =
    form.values.cost === 0
      ? 'Reward / Cost'
      : form.values.cost > 0
        ? 'Reward'
        : 'Cost'

  return (
    <div className="flex justify-center w-full">
      <form
        className="flex flex-col gap-2 w-96"
        onSubmit={form.onSubmit((values) => console.log(values))}
      >
        <TextInput
          withAsterisk
          label="Name"
          placeholder="Do pushups; Read a book; etc."
          {...form.getInputProps('email')}
        />

        <NumberInput
          withAsterisk
          label={costLabel}
          description="Use positive numbers for rewards and negative for costs"
          placeholder="5"
          {...form.getInputProps('cost')}
        />

        <div className="flex mt-2 justify-end">
          <Button
            leftSection={<IconPlus size={14} />}
            variant="filled"
            color="orange"
            type="submit"
          >
            Create action
          </Button>
        </div>
      </form>
    </div>
  )
}
