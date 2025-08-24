"use client"

import type React from "react"
import { Manrope } from "next/font/google"
import { useEffect } from "react"
import { usePathname } from "next/navigation"


const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
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
  <html lang="en" className={`${manrope.variable} antialiased`}>
      <body>
        <ScrollToTop />
        {children}
      </body>
    </html>
  )
}
