import { useStore } from '@tanstack/react-form'
import { useFieldContext } from '~/lib/utils/formContexts'
import { Label } from '~/components/ui/label'
import { Input } from '~/components/ui/input'
import { Text } from '~/components/ui/text'
import { View } from 'react-native'
import { ZodError, z } from 'zod'

function NumberField({
  label,
  inputProps,
}: {
  label: string
  inputProps?: React.ComponentProps<typeof Input>
}) {
  const field = useFieldContext<number>()

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  const errors = useStore(field.store, (state) => state.meta.errors)

  return (
    <View className="flex gap-2 mb-2">
      <Label>{label}</Label>
      <Input
        className="w-full"
        onChangeText={(text) => {
          const coerced = z.coerce.number().safeParse(text)
          if (!coerced.success) {
            field.handleChange(field.state.value)
            return
          }

          field.handleChange(coerced.data)
        }}
        value={String(field.state.value)}
        {...inputProps}
        inputMode="decimal"
      />
      {errors.map((error: ZodError, idx: number) => (
        <Text key={idx} className="text-red-600">
          {error.message}
        </Text>
      ))}
    </View>
  )
}

export { NumberField }
