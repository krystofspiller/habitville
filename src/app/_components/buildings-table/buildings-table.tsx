'use client'

import {
  Table,
  TableScrollContainer,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
  Tooltip,
} from '@mantine/core'
import {
  IconHammer,
  IconHelp,
  IconSquareRoundedArrowUp,
} from '@tabler/icons-react'
import { BuildingsMenu } from '~/app/_components/buildings-table/buildings-menu'
import { DomainValue } from '~/app/_components/domain-value/domain-value'
// import { api } from '~/trpc/react'

export function BuildingsTable() {
  // const userActions = api.action.index.useQuery()

  // if (!userActions.data || userActions.isLoading) {
  //   return (
  //     <div className="flex justify-center w-full">
  //       <Loader size={24} color="orange" />
  //     </div>
  //   )
  // }

  // const rows = userActions.data.map((row) => {
  //   return (
  //     <TableTr key={row.id}>
  //       <TableTd>{row.name}</TableTd>
  //       <TableTd>
  //         {row.cost >= 0 && (
  //           <DomainValue value={row.cost} currency={['RP', 'XP']} />
  //         )}
  //       </TableTd>
  //       <TableTd>
  //         {row.cost < 0 && <DomainValue value={row.cost} currency="RP" />}
  //       </TableTd>
  //       {includeArchived && (
  //         <TableTd>
  //           <div className="flex items-center">
  //             {row.archived ? (
  //               <IconCheck color="green" />
  //             ) : (
  //               <IconX color="gray" />
  //             )}
  //           </div>
  //         </TableTd>
  //       )}
  //       {!row.archived && (
  //         <TableTd className="flex justify-end">
  //           <ActionsMenu action={row} />
  //         </TableTd>
  //       )}
  //     </TableTr>
  //   )
  // })

  const rows = (
    <TableTr>
      <TableTd>Town hall</TableTd>
      <TableTd>1</TableTd>
      <TableTd>
        <DomainValue value={10} currency="RP" />
      </TableTd>
      <TableTd>
        <DomainValue value={20} currency="RP" />
      </TableTd>
      <TableTd className="flex justify-end">
        <div className="flex items-center gap-1">
          <Tooltip
            label={
              <span>
                Generates 5 score per hour at current level.
                <br />
                Next level: 10 score per hour.
              </span>
            }
            className="text-zinc-100 bg-zinc-800"
          >
            <IconHelp size={24} />
          </Tooltip>
          <BuildingsMenu />
        </div>
      </TableTd>
    </TableTr>
  )

  return (
    <TableScrollContainer minWidth="100%">
      <Table verticalSpacing="xs">
        <TableThead>
          <TableTr>
            <TableTh>Building</TableTh>
            <TableTh>Level</TableTh>
            <TableTh>
              <div className="flex items-center gap-1">
                <div className="text-orange-600">
                  <IconSquareRoundedArrowUp />
                </div>{' '}
                Upgrade cost
              </div>
            </TableTh>
            <TableTh>
              <div className="flex items-center gap-1">
                <div className="text-green-800">
                  <IconHammer />
                </div>{' '}
                Building cost
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
