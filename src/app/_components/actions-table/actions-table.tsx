'use client'

import { Button, Table } from '@mantine/core'
import { IconCheck } from '@tabler/icons-react'
import { DomainValue } from '~/app/_components/domain-value/domain-value'

export function ActionsTable() {
  const data = [
    {
      id: 1,
      name: 'Pushups',
      cost: 10,
    },
    {
      id: 1,
      name: 'Chips',
      cost: -10,
    },
  ]

  const rows = data.map((row) => {
    return (
      <Table.Tr key={row.id}>
        <Table.Td>{row.name}</Table.Td>
        <Table.Td>
          <DomainValue value={row.cost} currency="RP" showIcon />
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
    <Table.ScrollContainer minWidth={800}>
      <Table verticalSpacing="xs">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Action</Table.Th>
            <Table.Th>Potential cost</Table.Th>
            <Table.Th></Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  )
}
