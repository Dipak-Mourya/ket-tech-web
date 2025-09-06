"use client"

import { projectsData } from "@/data"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export function LatestProjects() {
  // Show only first 8 projects on home page
  const displayProjects = projectsData.slice(0, 8)

  return (
    <section className="py-20 bg-gradient-to-br from-muted/20 via-muted/30 to-muted/40 relative">
      {/* Background decorative elements */}
     

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-accent/10 rounded-full mb-4">
            <div className="w-2 h-2 bg-accent rounded-full mx-1"></div>
            <div className="w-2 h-2 bg-accent/70 rounded-full mx-1"></div>
            <div className="w-2 h-2 bg-accent/40 rounded-full mx-1"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Latest Projects</h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our recent work and see how we transform spaces into extraordinary experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {displayProjects.map((project, index) => (
            <Card key={project.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.03] bg-white border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <Image
                    src={project.image || "/fallback/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={240}
                    className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    draggable={false}
                  />
                  
                  <div className="absolute top-4 left-4 z-20">
                    <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 px-4 py-2 rounded-full text-xs md:text-sm font-medium shadow-lg backdrop-blur-sm">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white to-white/95 text-accent p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold font-serif text-lg md:text-xl text-foreground">{project.title}</h3>
                      
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/projects">
            <Button size="lg" className="cursor-pointer bg-gradient-to-r from-foreground to-foreground/90 hover:from-foreground/90 hover:to-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-8 py-3 rounded-xl">
              See More Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
