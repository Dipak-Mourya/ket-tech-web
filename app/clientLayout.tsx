"use client"

import type React from "react"
import { Poppins } from "next/font/google"
import { useEffect } from "react"
import { usePathname } from "next/navigation"


const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
})

// <CHANGE> Added scroll reset functionality for page navigation
function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
  <html lang="en" className={`${poppins.variable} antialiased`}>
      <body>
        <ScrollToTop />
        {children}
      </body>
    </html>
  )
}
