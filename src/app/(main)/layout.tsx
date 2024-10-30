export const metadata = {
  title: "Audiophile",
  description: "Shop the best music equipment.",
}

import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { manrope } from "@/styles/fonts"
import "@/styles/globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={`${manrope.className} text-body antialiased`} lang="en">
      <body>
        <header>
          <Navbar />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
