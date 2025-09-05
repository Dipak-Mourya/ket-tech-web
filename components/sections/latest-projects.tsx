"use client"

import { projectsData } from "@/data"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function LatestProjects() {
  // Show only first 8 projects on home page
  const displayProjects = projectsData.slice(0, 8)

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Latest Projects</h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our recent work and see how we transform spaces into extraordinary experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {displayProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative group">
                  <Image
                    src={project.image || "/fallback/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={240}
                    className="w-full h-60 object-cover"
                    loading="lazy"
                    draggable={false}
                  />
                  <div className="absolute top-2 left-2 bg-accent bg-opacity-10 text-white px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                    {project.category}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-white text-accent p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                    <h3 className="font-semibold mb-2 font-serif text-lg md:text-xl">{project.title}</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/projects">
            <Button size="lg" className="cursor-pointer bg-foreground">
              See More Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
