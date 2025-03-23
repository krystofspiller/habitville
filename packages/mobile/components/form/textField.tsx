import { useStore } from '@tanstack/react-form'
import { useFieldContext } from '~/lib/utils/formContexts'
import { Label } from '~/components/ui/label'
import { Input } from '~/components/ui/input'
import { Text } from '~/components/ui/text'
import { View } from 'react-native'

function TextField({
  label,
  inputProps,
}: {
  label: string
  inputProps?: React.ComponentProps<typeof Input>
}) {
  const field = useFieldContext<string>()

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  const errors = useStore(field.store, (state) => state.meta.errors)

  return (
    <View className="flex gap-2 mb-2">
      <Label>{label}</Label>
      <Input
        className="w-full"
        onChangeText={(text) => field.handleChange(text)}
        value={field.state.value}
        inputMode="text"
        autoCapitalize="none"
        {...inputProps}
      />
      {errors.map((error: string, idx: number) => (
        <Text key={idx} className="text-red-600">
          {error}
        </Text>
      ))}
    </View>
  )
}

export { TextField }
