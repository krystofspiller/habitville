import { Anchor, Button, Grid, GridCol, Title, Tooltip } from '@mantine/core'
import { Progress } from '@mantine/core'
import { ActionsTable } from '~/app/_components/actions-table/actions-table'
import { DomainValue } from '~/app/_components/domain-value/domain-value'
import { IconPlus } from '@tabler/icons-react'
import Link from 'next/link'

export default async function Page() {
  return (
    <Grid>
      <GridCol span={{ base: 12 }} className="flex justify-between">
        <Tooltip label="Realized potential" color="gray">
          <div>
            <DomainValue value={100} currency="RP" showCurrencyLabel />
          </div>
        </Tooltip>
        <div className="flex items-center gap-2">
          Level: X
          <div className="w-24">
            <Progress color="violet" value={70} />
          </div>
        </div>
      </GridCol>
      <GridCol span={{ base: 12 }}>
        <div className="flex justify-between">
          <Title size="h3">Quick actions</Title>
          <Anchor component={Link} href="actions/new">
            <Button
              leftSection={<IconPlus size={14} />}
              variant="filled"
              color="gray"
            >
              Add action
            </Button>
          </Anchor>
        </div>
        <ActionsTable />
      </GridCol>
      <GridCol span={{ base: 12 }} className="flex flex-col gap-2">
        <Title size="h3">Ville overview</Title>
        Coming soon
      </GridCol>
    </Grid>
  )
}
