'use client'

import { Button, Menu } from '@mantine/core'
import {
  IconHammer,
  IconSquareRoundedArrowUp,
  IconDots,
} from '@tabler/icons-react'
// import { api } from '~/trpc/react'
// import { notifications } from '@mantine/notifications'

export function BuildingsMenu() {
  // const utils = api.useUtils()
  // const markCompletedMutation = api.action.markCompleted.useMutation({
  //   onSuccess: () => {
  //     notifications.show({
  //       color: 'green',
  //       message: `Action ${action.name} was completed`,
  //     })
  //     void utils.user.get.invalidate()
  //     void utils.action.index.invalidate()
  //   },
  // })
  // const archiveMutation = api.action.archive.useMutation({
  //   onSuccess: () => {
  //     notifications.show({
  //       color: 'red',
  //       message: `Action ${action.name} was archived`,
  //     })
  //     void utils.action.index.invalidate()
  //   },
  // })

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
        <Menu.Item
          onClick={() => {
            console.log('todo')
          }}
          className="text-green-600"
          color="green"
          leftSection={<IconHammer size={14} />}
        >
          Build
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item
          onClick={() => {
            console.log('todo')
          }}
          color="orange"
          leftSection={<IconSquareRoundedArrowUp size={14} />}
        >
          Upgrade
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}
