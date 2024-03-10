'use client'

import { Group } from '@mantine/core'
import { IconLayoutBoard, IconLogout, IconRun } from '@tabler/icons-react'
import { useState } from 'react'
import classes from './navbar.module.css'

const data = [
  { link: '/dashboard', label: 'Dashboard', icon: IconLayoutBoard },
  { link: '/actions', label: 'Actions', icon: IconRun },
]

export function Navbar() {
  const [active, setActive] = useState('Dashboard')
  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={() => {
        setActive(item.label)
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ))

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <span>HabitVille</span>
        </Group>
        {links}
      </div>

      <div className={classes.footer}>
        <a href="/api/auth/signout" className={classes.link}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  )
}
