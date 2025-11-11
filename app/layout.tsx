import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'The Alchemy - Master the Markets',
  description: 'Master the markets with The Alchemy. Full lifetime access to mechanical trading strategies with automation and daily insights.',
  openGraph: {
    title: 'The Alchemy - Master the Markets',
    description: 'Master the markets with The Alchemy. Full lifetime access to mechanical trading strategies with automation and daily insights.',
    images: ['/Black_and_Blue_Modern_Startup_Pitch_Deck.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Alchemy - Master the Markets',
    description: 'Master the markets with The Alchemy. Full lifetime access to mechanical trading strategies with automation and daily insights.',
    images: ['/Black_and_Blue_Modern_Startup_Pitch_Deck.png'],
  },
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