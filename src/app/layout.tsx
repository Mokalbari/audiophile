import { manrope } from "@/styles/font"
import "@/styles/globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Audiophile",
  description: "Audiophile, a high-end audio equipment store.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} h-screen text-base antialiased`}>
        {children}
      </body>
    </html>
  )
}
