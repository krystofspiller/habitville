import { useFormContext } from '~/lib/utils/form'
import { Button } from '~/components/ui/button'
import { Text } from '~/components/ui/text'

function SubmitButton({ label = 'Submit' }: { label?: string }) {
  const form = useFormContext()

  return (
    <form.Subscribe selector={(state) => state.isSubmitting}>
      {(isSubmitting) => (
        <Button
          disabled={isSubmitting}
          onPress={() => void form.handleSubmit()}
        >
          <Text>{label}</Text>
        </Button>
      )}
    </form.Subscribe>
  )
}

export { SubmitButton }
