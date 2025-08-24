"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { X } from "lucide-react"
import Link from "next/link"

const projects = [
  { id: 1, title: "Modern Living Room", image: "/modern-living-room.png" },
  { id: 2, title: "Luxury Bedroom", image: "/luxury-bedroom.png" },
  { id: 3, title: "Contemporary Kitchen", image: "/contemporary-kitchen.png" },
  { id: 4, title: "Elegant Dining Room", image: "/elegant-dining-room-interior-design.png" },
  { id: 5, title: "Stylish Office Space", image: "/stylish-office-interior-design.png" },
  { id: 6, title: "Cozy Study Room", image: "/cozy-study-room-interior-design.png" },
  { id: 7, title: "Spa Bathroom", image: "/spa-bathroom-interior-design.png" },
  { id: 8, title: "Kids Playroom", image: "/kids-playroom-interior-design.png" },
]

export function LatestProjects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
    if (selectedImage) {
      document.body.classList.add("no-scroll")
    } else {
      document.body.classList.remove("no-scroll")
    }

    return () => {
      document.body.classList.remove("no-scroll")
    }
  }, [selectedImage])

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-geist font-bold text-3xl md:text-4xl text-foreground mb-4">Latest Projects</h2>
          <p className="font-manrope text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our recent interior design transformations that showcase our commitment to excellence and attention
            to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow group"
              onClick={() => setSelectedImage(project.image)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/projects">
            <Button
              size="lg"
              variant="outline"
              className="font-manrope font-medium border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent cursor-pointer"
            >
              See More Projects
            </Button>
          </Link>
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/20 cursor-pointer"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Project detail"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}
