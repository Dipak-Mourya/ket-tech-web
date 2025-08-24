"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/placeholder.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-left max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="md:w-2/3 lg:w-1/2">
          <h1 className="font-geist font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            Best Interior Designers in Kolkata
          </h1>
          <p className="font-manrope text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Experience the highest level of transparency in interior design, with complete peace of mind.
          </p>
          <Link href="/projects">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-manrope font-medium px-8 py-3 cursor-pointer"
            >
              Discover More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
