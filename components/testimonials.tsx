export function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-geist font-bold text-3xl md:text-4xl text-foreground mb-4">Hear From Our Clients</h2>
          <p className="font-manrope text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch what our satisfied clients have to say about their experience with KET Design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Client Testimonials - Part 1"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/oHg5SJYRHA0"
              title="Client Testimonials - Part 2"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/iik25wqIuFo"
              title="Client Testimonials - Part 3"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
