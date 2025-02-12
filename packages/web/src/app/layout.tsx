import '~/styles/globals.css'
import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css'
import { type Metadata } from 'next'

import { ColorSchemeScript, MantineProvider } from '@mantine/core'

import { Inter } from 'next/font/google'

import { TRPCReactProvider } from '~/trpc/react'
import { Notifications } from '@mantine/notifications'
import { ContentLayout } from '~/app/_components/content-layout'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: {
    template: '%s | HabitVille',
    default: 'HabitVille',
  },
  description: 'Gamify your habits',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider>
          <MantineProvider defaultColorScheme="dark">
            <Notifications />
            <ContentLayout>{children}</ContentLayout>
          </MantineProvider>
        </TRPCReactProvider>
      </body>
    </html>
  )
}
