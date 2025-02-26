import { View } from 'react-native'
import { Redirect } from 'expo-router'
import { Authenticated, Unauthenticated, AuthLoading } from 'convex/react'
import { Loader } from '~/components/ui/loader'

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <AuthLoading>
        <Loader isLoading />
      </AuthLoading>
      <Authenticated>
        <Redirect href="/dashboard" />
      </Authenticated>
      <Unauthenticated>
        <Redirect href="/sign-in" />
      </Unauthenticated>
    </View>
  )
}
