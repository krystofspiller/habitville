import UserInfoLayout from '~/components/userInfoLayout'
import { api } from '~/convex/_generated/api'
import { useMutation, useQuery } from 'convex/react'

import { ScrollView } from 'react-native'
import { Text } from '~/components/ui/text'
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
import UserCurrency from '~/components/userCurrency'

enum BuildingType {
  TOWNHALL,
  HOUSE,
  FARM,
}

const BUILDINGS = [
  {
    _id: 1,
    type: BuildingType.TOWNHALL,
    quantity: 1,
    level: 1,
    buildCost: null,
  },
  {
    _id: 2,
    type: BuildingType.HOUSE,
    quantity: 2,
    level: 1,
    buildCost: 20,
  },
  {
    _id: 3,
    type: BuildingType.FARM,
    quantity: 1,
    level: 1,
    buildCost: 30,
  },
]

export default function HabitVille() {
  // const actions = useQuery(api.actions.getUserActions)
  // const recordAction = useMutation(api.actions.recordAction)

  const insets = useSafeAreaInsets()

  const getBuildingName = (building: (typeof BUILDINGS)[0]) => {
    const typeToNameMap = {
      [BuildingType.TOWNHALL]: 'Townhall',
      [BuildingType.HOUSE]: 'House',
      [BuildingType.FARM]: 'Farm',
    }

    return `${building.quantity > 1 ? `${building.quantity}x ` : ''}${typeToNameMap[building.type]} (lvl ${building.level})`
  }

  return (
    <UserInfoLayout>
      <Text variant="h1">HabitVille</Text>
      <ScrollView bounces={false} showsHorizontalScrollIndicator={false}>
        <Table className="min-w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="px-4 w-[40%]">
                <Text>Name</Text>
              </TableHead>
              <TableHead className="w-[40%]">
                <Text>Build cost</Text>
              </TableHead>
              <TableHead className="w-[20%]" />
            </TableRow>
          </TableHeader>
          <TableBody>
            <FlashList
              data={BUILDINGS}
              estimatedItemSize={45}
              contentContainerStyle={{
                paddingBottom: insets.bottom,
              }}
              showsVerticalScrollIndicator={false}
              renderItem={({ item: building, index }) => (
                <TableRow
                  onPress={() => {
                    // void recordAction({ actionId: action._id, quantity: 1 })
                  }}
                  key={building._id}
                  className={cn(
                    'active:bg-secondary',
                    index % 2 && 'bg-muted/40 ',
                  )}
                >
                  <TableCell className="w-[40%]">
                    <Text>{getBuildingName(building)}</Text>
                  </TableCell>
                  <TableCell className="w-[40%]">
                    <UserCurrency type="moment" value={building.buildCost} />
                  </TableCell>
                  <TableCell className="w-[20%] items-end justify-center p-0">
                    <Button
                      variant="link"
                      size="sm"
                      onPress={() => {
                        // void recordAction({ actionId: action._id, quantity: 1 })
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
