import type React from "react"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "KET Design - Best Interior Designers in Kolkata",
  description:
    "Experience the highest level of transparency in interior design, with complete peace of mind. Professional interior design services in Kolkata.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${manrope.variable} antialiased`}>
      <body>
        <ScrollToTop />
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
