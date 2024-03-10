import { Anchor, Button, Grid, GridCol, Title } from '@mantine/core'
import { IconPlus } from '@tabler/icons-react'
import Link from 'next/link'
import { ActionsTable } from '~/app/_components/actions-table/actions-table'
import { ValueBar } from '~/app/_components/value-bar/value-bar'

export const metadata = {
  title: 'Dashboard',
}

export default async function Page() {
  return (
    <Grid>
      <GridCol span={{ base: 12 }}>
        <ValueBar />
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
