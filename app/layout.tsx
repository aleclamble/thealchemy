import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'The Alchemy - Master the Markets',
  description: 'Learn a Mechanical strategy for market success with daily insights by The Architect & AC.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script async src="https://js.stripe.com/v3/buy-button.js" />
      </head>
      <body>{children}</body>
    </html>
  )
}