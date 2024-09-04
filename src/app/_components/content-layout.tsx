'use client'

import { AppShell, Burger, Group } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Navbar } from '~/app/_components/navbar'
import { ValueBar } from '~/app/_components/value-bar/value-bar'

export function ContentLayout({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure()

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 250, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <div className="flex flex-grow items-center gap-4">
            <div className="flex items-center md:w-[234px]">
              <Burger
                opened={opened}
                onClick={toggle}
                hiddenFrom="sm"
                size="sm"
              />
              <span>HabitVille</span>
            </div>
            <div className="hidden md:flex flex-grow">
              <ValueBar />
            </div>
          </div>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Navbar />
      </AppShell.Navbar>
      <AppShell.Main>
        <div className="flex md:hidden pb-4">
          <ValueBar />
        </div>
        {children}
      </AppShell.Main>
    </AppShell>
  )
}
