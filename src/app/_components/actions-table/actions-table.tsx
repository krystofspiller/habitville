'use client'

import { Button, Loader, Table } from '@mantine/core'
import {
  IconSquareRoundedArrowDown,
  IconSquareRoundedArrowUp,
  IconCheck,
} from '@tabler/icons-react'
import { DomainValue } from '~/app/_components/domain-value/domain-value'
import { api } from '~/trpc/react'

export function ActionsTable() {
  const userActions = api.action.index.useQuery()

  const data = userActions.data ?? []

  if (userActions.isLoading) {
    return (
      <div className="flex w-full justify-center">
        <Loader color="orange" />
      </div>
    )
  }

  const rows = data.map((row) => {
    return (
      <Table.Tr key={row.id}>
        <Table.Td>{row.name}</Table.Td>
        <Table.Td>
          {row.cost >= 0 && (
            <DomainValue value={row.cost} currency={['RP', 'XP']} />
          )}
        </Table.Td>
        <Table.Td>
          {row.cost < 0 && <DomainValue value={row.cost} currency="RP" />}
        </Table.Td>
        <Table.Td className="flex justify-end">
          <Button
            leftSection={<IconCheck size={14} />}
            variant="outline"
            color="green"
          >
            Mark done
          </Button>
        </Table.Td>
      </Table.Tr>
    )
  })

  return (
    <Table.ScrollContainer minWidth="100%">
      <Table verticalSpacing="xs">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Action</Table.Th>
            <Table.Th>
              <div className="flex items-center gap-1">
                <div className="text-blue-600">
                  <IconSquareRoundedArrowUp />
                </div>{' '}
                Reward
              </div>
            </Table.Th>
            <Table.Th>
              <div className="flex items-center gap-1">
                <div className="text-red-600">
                  <IconSquareRoundedArrowDown />
                </div>{' '}
                Cost
              </div>
            </Table.Th>

            <Table.Th></Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  )
}
