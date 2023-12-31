import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/react'


export const metadata: Metadata = {
  title: 'Code the Change',
  description: 'Code the Change is a computer science club in DVC that aims to help non-profit organizations with our technical skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/img/codethechangelogo.png" sizes="any" />
      </head>
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
          <Analytics />
        </main>
        <Footer />
        </body>
    </html>
  )
}
