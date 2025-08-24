"use client"

import { projectsData } from "@/data"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function LatestProjects() {
  // Show only first 8 projects on home page
  const displayProjects = projectsData.slice(0, 8)

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Latest Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our recent work and see how we transform spaces into extraordinary experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {displayProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative group">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2 font-serif">{project.title}</h3>
                  <span className="text-sm text-accent font-medium">{project.category}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/projects">
            <Button size="lg" className="cursor-pointer">
              See More Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
