import { youtubeVideosData } from "@/data"

export function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-foreground mb-4">Hear From Our Clients</h2>
          <p className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch what our satisfied clients have to say about their experience with KET Design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {youtubeVideosData.map((video) => (
            <div key={video.id} className="relative aspect-video bg-muted rounded-lg overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${video.embedId}`}
                title={video.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
