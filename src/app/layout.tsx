import '~/styles/globals.css'
import '@mantine/core/styles.css'

import { ColorSchemeScript, MantineProvider } from '@mantine/core'

import { Inter } from 'next/font/google'

import { TRPCReactProvider } from '~/trpc/react'
import { Navbar } from '~/app/_components/navbar'
import { ContentLayout } from '~/app/_components/content-layout'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata = {
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
            <main className="flex">
              <Navbar />
              <ContentLayout>{children}</ContentLayout>
            </main>
          </MantineProvider>
        </TRPCReactProvider>
      </body>
    </html>
  )
}
