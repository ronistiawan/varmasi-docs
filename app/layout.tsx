import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import 'nextra-theme-docs/style.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://parmasi.com'),
  title: {
    default: 'Parmasi',
    template: '%s | Parmasi'
  },
  description: 'Aplikasi Apotek terlengkap dan termurah',
  applicationName: 'Parmasi',
  generator: 'Next.js',
  other: {
    'msapplication-TileColor': '#fff'
  }
}

const navbar = (
  <Navbar
    logo={
      <span>
        <img
          src="https://ronistiawan.github.io/parmasi/parmasi-512.png"
          alt="logo"
        />
      </span>
    }
  />
)

export default async function RootLayout({
  children
}: {
  children: ReactNode
}) {
  const pageMap = await getPageMap()
  return (
    <html lang="id" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          footer={<Footer>Parmasi @ 2024</Footer>}
          pageMap={pageMap}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
