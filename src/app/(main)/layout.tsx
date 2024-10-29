export const metadata = {
  title: 'Audiophile',
  description: 'Shop the best music equipment.',
}

import { manrope } from '@/styles/fonts'
import '@/styles/globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={`${manrope.className}`} lang="en">
      <body>{children}</body>
    </html>
  )
}
