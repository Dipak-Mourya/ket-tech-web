"use client"

import { useEffect, useState } from "react"

const mediaLogos = [
  { name: "Times of India", logo: "/times-of-india-logo.png" },
  { name: "Hindustan Times", logo: "/hindustan-times-logo.png" },
  { name: "Economic Times", logo: "/economic-times-logo.png" },
  { name: "Indian Express", logo: "/indian-express-logo.png" },
  { name: "Deccan Herald", logo: "/deccan-herald-logo.png" },
  { name: "Business Standard", logo: "/business-standard-logo.png" },
]

export function MediaCoverage() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (mediaLogos.length - 3))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-geist font-bold text-3xl md:text-4xl text-foreground mb-4">Media Coverage</h2>
          <p className="font-manrope text-lg text-muted-foreground">Featured in leading publications</p>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 4)}%)` }}
          >
            {mediaLogos.map((media, index) => (
              <div key={index} className="flex-shrink-0 w-1/4 px-4">
                <div className="flex items-center justify-center h-20 bg-muted/30 rounded-lg">
                  <img
                    src={media.logo || "/placeholder.svg"}
                    alt={media.name}
                    className="max-h-12 max-w-full object-contain opacity-60 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
