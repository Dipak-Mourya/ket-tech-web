"use client"

import { Card } from "@/components/ui/card"

const videos = [
  { id: 1, title: "Modern Living Room Design", thumbnail: "/video-thumbnail-1.jpg" },
  { id: 2, title: "Luxury Bedroom Transformation", thumbnail: "/video-thumbnail-2.jpg" },
  { id: 3, title: "Contemporary Kitchen Design", thumbnail: "/video-thumbnail-3.jpg" },
  { id: 4, title: "Office Space Interior", thumbnail: "/video-thumbnail-4.jpg" },
]

export function Videos() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-foreground mb-4">Design Process Videos</h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch our design process in action and see how we transform spaces into beautiful interiors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {videos.map((video) => (
            <Card key={video.id} className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow group">
              <div className="relative">
                <img
                  src={video.thumbnail || "/fallback/placeholder.svg?height=200&width=300"}
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[8px] border-l-accent border-y-[6px] border-y-transparent ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-sans font-semibold text-sm text-foreground">{video.title}</h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
