import { Anchor, Title } from '@mantine/core'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center text-center">
      <div>
        <Title>Not found - 404</Title>
        <Anchor component={Link} href="/">
          Return home
        </Anchor>
      </div>
    </div>
  )
}
