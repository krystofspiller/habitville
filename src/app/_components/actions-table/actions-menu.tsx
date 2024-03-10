'use client'

import { Button, Menu } from '@mantine/core'
import { IconCheck, IconDots, IconArchive } from '@tabler/icons-react'
import { api } from '~/trpc/react'
import { notifications } from '@mantine/notifications'

export function ActionsMenu({
  actionId,
  actionName,
}: {
  actionId: number
  actionName: string
}) {
  const utils = api.useUtils()
  const markDoneMutation = api.action.markDone.useMutation({
    onSuccess: () => {
      notifications.show({
        color: 'orange',
        message: `Action ${actionName} was completed`,
      })
      void utils.user.get.invalidate()
    },
  })
  const archiveMutation = api.action.archive.useMutation({
    onSuccess: () => {
      notifications.show({
        color: 'orange',
        message: `Action ${actionName} was archived`,
      })
      void utils.action.index.invalidate()
    },
  })

  return (
    <Menu
      trigger="click-hover"
      openDelay={100}
      closeDelay={100}
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
            root: 'w-8 h-8 p-0 rounded-full',
          }}
        >
          <IconDots className="w-6" />
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          onClick={() => markDoneMutation.mutate({ actionId })}
          color="green"
          leftSection={<IconCheck size={14} />}
        >
          Mark done
        </Menu.Item>
        <Menu.Divider />
        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item
          onClick={() => archiveMutation.mutate({ actionId })}
          color="gray"
          leftSection={<IconArchive size={14} />}
        >
          Archive action
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}
