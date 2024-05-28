'use client'

import { Button, Menu } from '@mantine/core'
import {
  IconHammer,
  IconSquareRoundedArrowUp,
  IconDots,
} from '@tabler/icons-react'
import { api } from '~/trpc/react'
import { notifications } from '@mantine/notifications'
import { type EnhancedBuilding } from '~/server/app/models/building'
import { BUILDINGS } from '~/app/_components/buildings-table/buildings-utils'

export function BuildingsMenu({ building }: { building: EnhancedBuilding }) {
  const { name: buildingName } = BUILDINGS[building.type]

  const utils = api.useUtils()

  const createBuilding = api.building.create.useMutation({
    onSuccess: async () => {
      notifications.show({
        color: 'green',
        message: `Building ${buildingName} was built`,
      })
      void utils.building.index.invalidate()
      void utils.user.get.invalidate()
    },
  })

  return (
    <Menu
      trigger="click-hover"
      openDelay={0}
      closeDelay={300}
      position="bottom-end"
      withArrow
      arrowPosition="center"
      offset={5}
      classNames={{
        dropdown: 'p-0',
        divider: 'm-0',
        item: 'z-10 relative px-3 py-1.5',
        arrow: 'z-0 absolute',
        label: 'pt-2',
      }}
    >
      <Menu.Target>
        <Button
          color="gray"
          classNames={{
            root: 'w-6 h-6 p-0 rounded-full',
          }}
        >
          <IconDots className="w-5" />
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        {building.buildCost > 0 && (
          <Menu.Item
            onClick={() => {
              createBuilding.mutate({ type: building.type })
            }}
            className="text-green-600"
            color="green"
            leftSection={<IconHammer size={14} />}
          >
            Build
          </Menu.Item>
        )}
        <Menu.Divider />
        <Menu.Item
          onClick={() => {
            console.log('todo')
          }}
          color="orange"
          leftSection={<IconSquareRoundedArrowUp size={14} />}
        >
          Upgrade - TODO
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}
