import { Redirect, Tabs } from 'expo-router'
import { Text, View } from 'react-native'

import { House, List, Profile } from '~/lib/icons'
import { Loader } from '~/components/ui/loader'
import { useConvexAuth } from 'convex/react'
import { LucideIcon } from 'lucide-react-native'

const TabIcon = ({
  icon,
  name,
  color,
  focused,
}: {
  icon: LucideIcon
  name: string
  color: string
  focused: boolean
}) => {
  const Icon = icon
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

  const tabs = [
    { icon: List, name: 'actions', title: 'Actions' },
    { icon: House, name: 'ville', title: 'HabitVille' },
    { icon: Profile, name: 'profile', title: 'Profile' },
  ]

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
        {tabs.map(({ icon, name, title }, index) => (
          <Tabs.Screen
            key={index}
            name={name}
            options={{
              title: title,
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcon
                  icon={icon}
                  name={title}
                  color={color}
                  focused={focused}
                />
              ),
            }}
          />
        ))}
      </Tabs>
      <Loader isLoading={isLoading} />
    </>
  )
}

export default TabLayout
