import { SafeAreaView, View } from 'react-native'
import React from 'react'
import { CircleSmall } from '~/lib/icons'
import { Text } from '~/components/ui/text'
import { api } from '~/convex/_generated/api'
import { useQuery } from 'convex/react'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type UserInfoLayoutProps = React.PropsWithChildren<{}>

const UserInfoLayout = ({ children }: UserInfoLayoutProps) => {
  const currentUser = useQuery(api.users.currentUser)

  return (
    <SafeAreaView className="flex m-4 gap-4">
      <View className="flex flex-row items-center justify-between">
        <View className="flex flex-row items-center justify-between gap-1">
          <CircleSmall color="#2563eb" fill="#2563eb" size="16px" />
          <Text>{currentUser?.balance ?? 0}</Text>
        </View>

        <View className="flex flex-row items-center justify-between gap-1 color-yellow-400">
          <CircleSmall color="#facc15" fill="#facc15" size="16px" />
          <Text>{currentUser?.score?.toString() ?? 0}</Text>
        </View>
      </View>

      {children}
    </SafeAreaView>
  )
}

export default UserInfoLayout
