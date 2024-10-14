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
import { BuildingType } from '@prisma/client'
import {
  IconHammer,
  IconHelp,
  IconSquareRoundedArrowUp,
} from '@tabler/icons-react'
import { BuildingsMenu } from '~/app/_components/buildings-table/buildings-menu'
import { BUILDINGS } from '~/app/_components/buildings-table/buildings-utils'
import { DomainValue } from '~/app/_components/domain-value/domain-value'
import { NotApplicable } from '~/app/_components/typography/not-applicable'
import {
  getWarehouseCap,
  type EnhancedBuilding,
} from '~/server/app/models/building'

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
            <div className="flex flex-col">
              <div>{name}</div>
              <div className="text-xs text-zinc-500">LVL {building.level}</div>
            </div>
          </div>
        </TableTd>
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
          {building.buildCost ? (
            <DomainValue value={building.buildCost} currency="RP" />
          ) : (
            <Tooltip
              label={building.unbuildableReason}
              className="text-zinc-100 bg-zinc-800"
            >
              <NotApplicable />
            </Tooltip>
          )}
        </TableTd>
        <TableTd>
          <Tooltip
            label={
              <span>
                {building.type !== BuildingType.WAREHOUSE
                  ? `Currently generates ${building.scorePerHour} score per hour.`
                  : `Currently increases storage capacity by ${building.quantity * getWarehouseCap([building], false)}.`}
              </span>
            }
            className="text-zinc-100 bg-zinc-800"
          >
            <div className="flex items-center">
              <IconHelp size={24} />
            </div>
          </Tooltip>
        </TableTd>
        <TableTd>
          <div className="h-full flex items-center justify-end">
            <BuildingsMenu building={building} />
          </div>
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
            <TableTh>
              <div className="flex items-center gap-1 whitespace-nowrap">
                <div className="flex items-center text-blue-600">
                  <IconSquareRoundedArrowUp />
                </div>{' '}
                Upgrade cost
              </div>
            </TableTh>
            <TableTh>
              <div className="flex items-center gap-1 whitespace-nowrap">
                <div className="flex items-center text-blue-600">
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
