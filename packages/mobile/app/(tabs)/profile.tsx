import { View } from 'react-native'
import { Text } from '~/components/ui/text'
import { useAuthActions } from '@convex-dev/auth/dist/react'
import { Button } from '~/components/ui/button'

export default function Dashboard() {
  const { signOut } = useAuthActions()

  return (
    <View className="flex-1 items-center justify-center">
      <Button onPress={() => void signOut()}>
        <Text>Sign out</Text>
      </Button>
    </View>
  )
}
