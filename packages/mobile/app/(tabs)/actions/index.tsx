import { api } from '~/convex/_generated/api'
import { useQuery } from 'convex/react'
import { SafeAreaView, View } from 'react-native'
import { Text } from '~/components/ui/text'
import { Link } from 'expo-router'
import { Button } from '~/components/ui/button'

export default function Actions() {
  const tasks = useQuery(api.tasks.get)

  return (
    <SafeAreaView className="flex m-4">
      <View className="flex flex-row items-center justify-between">
        <Text variant="h1">Actions</Text>

        <Link push href="/actions/new" asChild>
          <Button>
            <Text>Add action</Text>
          </Button>
        </Link>
      </View>

      <Text className="text-lg text-muted-foreground">Tasks</Text>
      {tasks?.map((item) => (
        <Text className="text-sm text-muted-foreground" key={item._id}>
          {item.text}
        </Text>
      ))}
    </SafeAreaView>
  )
}
