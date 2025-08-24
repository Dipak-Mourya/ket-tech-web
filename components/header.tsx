"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const handleContactClick = () => {
    if (pathname === "/") {
      // If on home page, just scroll to contact section
      const element = document.getElementById("contact")
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // If on other pages, navigate to home page and then scroll to contact
      router.push("/")
      setTimeout(() => {
        const element = document.getElementById("contact")
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }
    setIsMenuOpen(false)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="font-geist font-bold text-2xl text-foreground">KET Design</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-accent transition-colors font-manrope cursor-pointer">
              Home
            </Link>
            <Link
              href="/about"
              className="text-foreground hover:text-accent transition-colors font-manrope cursor-pointer"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-foreground hover:text-accent transition-colors font-manrope cursor-pointer"
            >
              Projects
            </Link>
            <button
              onClick={handleContactClick}
              className="text-foreground hover:text-accent transition-colors font-manrope cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-left text-foreground hover:text-accent transition-colors font-manrope cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-left text-foreground hover:text-accent transition-colors font-manrope cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/projects"
                className="text-left text-foreground hover:text-accent transition-colors font-manrope cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <button
                onClick={handleContactClick}
                className="text-left text-foreground hover:text-accent transition-colors font-manrope cursor-pointer"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
