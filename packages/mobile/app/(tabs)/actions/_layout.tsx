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
      <Stack.Screen
        name="new"
        options={{
          title: 'New action',
          headerBackTitle: 'Back',
        }}
      />
    </Stack>
  )
}

export default ActionsLayout
