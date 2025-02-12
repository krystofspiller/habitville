import { Anchor, Button, Title } from '@mantine/core'
import { IconPlus } from '@tabler/icons-react'
import Link from 'next/link'
import { ActionsTable } from '~/app/_components/actions-table/actions-table'

export default async function Page() {
  return (
    <>
      <div className="flex justify-between">
        <Title size="h3">Actions</Title>
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
      <ActionsTable includeArchived />
    </>
  )
}
