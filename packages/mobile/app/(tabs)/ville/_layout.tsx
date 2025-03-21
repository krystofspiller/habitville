import { Stack } from 'expo-router'

const ActionsLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  )
}

export default ActionsLayout
