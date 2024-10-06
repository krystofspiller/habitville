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
import { BUILDINGS } from '~/app/_components/buildings-table/buildings-utils'
import { DomainValue } from '~/app/_components/domain-value/domain-value'
import { NotApplicable } from '~/app/_components/typography/not-applicable'
import { type EnhancedBuilding } from '~/server/app/models/building'

export function BuildingsTable({
  buildings,
}: {
  buildings: EnhancedBuilding[]
}) {
  const rows = buildings.map((building) => {
    const { name: buildingName, icon: BuildingIcon } = BUILDINGS[building.type]

    const name =
      building.quantity > 1
        ? `${buildingName} x ${building.quantity}`
        : buildingName

    return (
      <TableTr key={building.id}>
        <TableTd>
          <div className="flex items-center gap-1 h-full">
            <BuildingIcon />
            {name}
          </div>
        </TableTd>
        <TableTd>{building.level}</TableTd>
        <TableTd>
          {building.upgradeCost < 0 ? (
            <Tooltip
              label={building.upgradeInfo}
              className="text-zinc-100 bg-zinc-800"
            >
              <NotApplicable />
            </Tooltip>
          ) : (
            <DomainValue value={building.upgradeCost} currency="RP" />
          )}
        </TableTd>
        <TableTd>
          {building.unbuildableReason ?? !building.buildCost ? (
            <Tooltip
              label={building.unbuildableReason}
              className="text-zinc-100 bg-zinc-800"
            >
              <NotApplicable />
            </Tooltip>
          ) : (
            <DomainValue value={building.buildCost} currency="RP" />
          )}
        </TableTd>
        <TableTd>
          <Tooltip
            label={
              <span>
                Generates {building.scorePerHour} score per hour at current
                level.
              </span>
            }
            className="text-zinc-100 bg-zinc-800"
          >
            <IconHelp size={24} />
          </Tooltip>
        </TableTd>
        <TableTd className="flex justify-end">
          <BuildingsMenu building={building} />
        </TableTd>
      </TableTr>
    )
  })

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
            <TableTh>Info</TableTh>
            <TableTh></TableTh>
          </TableTr>
        </TableThead>
        <TableTbody>{rows}</TableTbody>
      </Table>
    </TableScrollContainer>
  )
}
