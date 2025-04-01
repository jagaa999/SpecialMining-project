import './globals.css'
import Navbar from '../components/Navbar'
import type { ReactNode } from 'react'
import React from 'react'

export const metadata = {
  title: 'SpecialMining',
  description: 'Special Mining компанийн танилцуулга сайт',
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="mn">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}