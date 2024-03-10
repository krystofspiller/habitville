'use client'

import {
  Loader,
  Table,
  TableScrollContainer,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
} from '@mantine/core'
import {
  IconSquareRoundedArrowDown,
  IconSquareRoundedArrowUp,
} from '@tabler/icons-react'
import { ActionsMenu } from '~/app/_components/actions-table/actions-menu'
import { DomainValue } from '~/app/_components/domain-value/domain-value'
import { api } from '~/trpc/react'

export function ActionsTable() {
  const userActions = api.action.index.useQuery()

  if (!userActions.data || userActions.isLoading) {
    return (
      <div className="flex justify-center w-full">
        <Loader size={24} color="orange" />
      </div>
    )
  }

  if (userActions.data.length === 0) {
    return 'No actions yet. Add one by clicking "Add action" button.'
  }

  const rows = userActions.data.map((row) => {
    return (
      <TableTr key={row.id}>
        <TableTd>{row.name}</TableTd>
        <TableTd>
          {row.cost >= 0 && (
            <DomainValue value={row.cost} currency={['RP', 'XP']} />
          )}
        </TableTd>
        <TableTd>
          {row.cost < 0 && <DomainValue value={row.cost} currency="RP" />}
        </TableTd>
        <TableTd className="flex justify-end">
          <ActionsMenu actionId={row.id} actionName={row.name} />
        </TableTd>
      </TableTr>
    )
  })

  return (
    <TableScrollContainer minWidth="100%">
      <Table verticalSpacing="xs">
        <TableThead>
          <TableTr>
            <TableTh>Action</TableTh>
            <TableTh>
              <div className="flex items-center gap-1">
                <div className="text-blue-600">
                  <IconSquareRoundedArrowUp />
                </div>{' '}
                Reward
              </div>
            </TableTh>
            <TableTh>
              <div className="flex items-center gap-1">
                <div className="text-red-600">
                  <IconSquareRoundedArrowDown />
                </div>{' '}
                Cost
              </div>
            </TableTh>

            <TableTh></TableTh>
          </TableTr>
        </TableThead>
        <TableTbody>{rows}</TableTbody>
      </Table>
    </TableScrollContainer>
  )
}
