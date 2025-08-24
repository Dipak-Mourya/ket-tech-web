"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video id="hero-video" className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline>
        <source src="/modern-luxury-interior-design-showcase-with-elegan.png" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 text-white px-4 max-w-7xl mx-auto w-full">
        <div className="flex justify-center">
          <div className="text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">Best Interior Designers in Kolkata</h1>
            <p className="text-lg md:text-xl mb-8 leading-relaxed">
              Experience the highest level of transparency in interior design, with complete peace of mind.
            </p>

            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg cursor-pointer"
              onClick={scrollToContact}
            >
              Discover More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
