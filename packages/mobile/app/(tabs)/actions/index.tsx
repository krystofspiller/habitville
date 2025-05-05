import { api } from '~/convex/_generated/api'
import { useMutation, useQuery } from 'convex/react'
import { ScrollView, View } from 'react-native'
import { Text } from '~/components/ui/text'
import { Link } from 'expo-router'
import { Button } from '~/components/ui/button'
import { FlashList } from '@shopify/flash-list'
import * as React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui/table'
import { cn } from '~/lib/utils/cn'
import { Ellipsis } from '~/lib/icons'
import UserInfoLayout from '~/components/userInfoLayout'

export default function Actions() {
  const actions = useQuery(api.actions.getUserActions)
  const recordAction = useMutation(api.actions.recordAction)

  const insets = useSafeAreaInsets()

  return (
    <UserInfoLayout>
      <View className="flex flex-row items-center justify-between">
        <Text variant="h1">Actions</Text>

        <Link push href="/actions/new" asChild>
          <Text className="text-muted-foreground">Add action</Text>
        </Link>
      </View>
      <ScrollView bounces={false} showsHorizontalScrollIndicator={false}>
        <Table className="min-w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="px-4 w-[40%]">
                <Text>Name</Text>
              </TableHead>
              <TableHead className="w-[40%]">
                <Text>Effect</Text>
              </TableHead>
              <TableHead className="w-[20%]" />
            </TableRow>
          </TableHeader>
          <TableBody>
            <FlashList
              data={actions}
              estimatedItemSize={45}
              contentContainerStyle={{
                paddingBottom: insets.bottom,
              }}
              showsVerticalScrollIndicator={false}
              renderItem={({ item: action, index }) => (
                <TableRow
                  onPress={() => {
                    void recordAction({ actionId: action._id, quantity: 1 })
                  }}
                  key={action._id}
                  className={cn(
                    'active:bg-secondary',
                    index % 2 && 'bg-muted/40 ',
                  )}
                >
                  <TableCell className="w-[40%]">
                    <Text>{action.name}</Text>
                  </TableCell>
                  <TableCell className="w-[40%]">
                    <Text>{action.effect}</Text>
                  </TableCell>
                  <TableCell className="w-[20%] items-end justify-center p-0">
                    <Button
                      variant="link"
                      size="sm"
                      onPress={() => {
                        void recordAction({ actionId: action._id, quantity: 1 })
                      }}
                    >
                      <Ellipsis className="text-foreground" size="32px" />
                    </Button>
                  </TableCell>
                </TableRow>
              )}
            />
          </TableBody>
        </Table>
      </ScrollView>
    </UserInfoLayout>
  )
}
