import { Redirect, Tabs } from 'expo-router'
import { Text, View } from 'react-native'

import { Dashboard } from '~/lib/icons/Dashboard'
import { Loader } from '~/components/ui/loader'
import { useConvexAuth } from 'convex/react'
import { LucideIcon } from 'lucide-react-native'

type AcceptableIcons = 'dashboard'
const TabIcon = ({
  type,
  color,
  name,
  focused,
}: {
  type: AcceptableIcons
  color: string
  name: string
  focused: boolean
}) => {
  const typeToIcon: Record<AcceptableIcons, LucideIcon> = {
    dashboard: Dashboard,
  }
  const Icon = typeToIcon[type]

  return (
    <View className="flex items-center justify-center gap-2 mt-4">
      <Icon color={color} />
      <Text
        className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs w-full h-4`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  )
}

const TabLayout = () => {
  const { isLoading, isAuthenticated } = useConvexAuth()

  if (!isLoading && !isAuthenticated) return <Redirect href="/sign-in" />

  // TODO: use RNR navigation?

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#FFA001',
          tabBarInactiveTintColor: '#CDCDE0',
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#161622',
            borderTopWidth: 1,
            borderTopColor: '#232533',
            height: 100,
          },
        }}
      >
        <Tabs.Screen
          name="dashboard"
          options={{
            title: 'Dashboard',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                type="dashboard"
                color={color}
                name="Dashboard"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
      <Loader isLoading={isLoading} />
    </>
  )
}

export default TabLayout
