'use client'

import { Button, Menu, Tooltip } from '@mantine/core'
import { IconCheck, IconDots, IconArchive } from '@tabler/icons-react'
import { api } from '~/trpc/react'
import { notifications } from '@mantine/notifications'
import { type Unpacked } from '~/util/types'
import { type ActionIndexOutput } from '~/server/api/root'

export function ActionsMenu({
  action,
}: {
  action: Unpacked<ActionIndexOutput>
}) {
  const utils = api.useUtils()
  const markCompletedMutation = api.action.markCompleted.useMutation({
    onSuccess: () => {
      notifications.show({
        color: 'green',
        message: `Action ${action.name} was completed`,
      })
      void utils.user.get.invalidate()
      void utils.action.index.invalidate()
    },
  })
  const archiveMutation = api.action.archive.useMutation({
    onSuccess: () => {
      notifications.show({
        color: 'red',
        message: `Action ${action.name} was archived`,
      })
      void utils.action.index.invalidate()
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
        dropdown: 'p-0 overflow-hidden',
        divider: 'm-0',
        item: 'z-10 relative px-3 py-1.5 rounded-none',
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
        <Tooltip
          disabled={!action.performedRecently}
          label="Already done in the last 24 hours"
          classNames={{
            tooltip: 'text-zinc-100 bg-zinc-800',
          }}
        >
          <div>
            <Menu.Item
              onClick={() =>
                markCompletedMutation.mutate({ actionId: action.id })
              }
              color="green"
              leftSection={<IconCheck size={14} />}
              disabled={action.performedRecently}
            >
              Mark completed
            </Menu.Item>
          </div>
        </Tooltip>
        <Menu.Divider />
        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item
          onClick={() => archiveMutation.mutate({ actionId: action.id })}
          color="gray"
          leftSection={<IconArchive size={14} />}
        >
          Archive action
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}
