import { Platform } from 'react-native'

function Form({
  form,
  children,
}: {
  form: { handleSubmit: () => Promise<void> }
  children: React.ReactNode
}) {
  if (Platform.OS !== 'web') {
    return children
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        void form.handleSubmit()
      }}
    >
      {children}
    </form>
  )
}

export { Form }
