"use client"

// Header, Footer and WhatsAppButton are provided by the root layout
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { projectsData, clientReviewsData } from "@/data"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export function ProjectsContent() {
  return (
    <main className="min-h-screen">
  {/* Header rendered by root layout */}

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden mt-20">
        <img
          src="/projects/modern-living-room.png"
          alt="Our Projects"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center">
          <h1 className="font-serif font-bold text-4xl md:text-5xl text-white mb-4">Our Projects</h1>
          <p className="font-serif text-xl text-white/90">Showcasing Excellence in Interior Design</p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">Featured Projects</h2>
            <p className="font-serif text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our portfolio of stunning interior design projects across residential and commercial spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/fallback/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-sans">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif font-semibold text-xl text-foreground mb-2">{project.title}</h3>
                  <p className="font-serif text-sm md:text-base text-muted-foreground">
                    Professional interior design with attention to detail
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Reviews Carousel */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">Client Reviews</h2>
            <p className="font-serif text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
              Read what our satisfied clients have to say about their experience with KET Design.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={false}
              pagination={{
                clickable: true,
                el: ".swiper-pagination",
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="reviews-swiper"
            >
              {clientReviewsData.map((review) => (
                <SwiperSlide key={review.id}>
                  <Card className="p-8 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="flex space-x-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                        ))}
                      </div>
                    </div>
                    <p className="font-serif text-sm md:text-base lg:text-lg text-muted-foreground mb-6 leading-relaxed italic">
                      "{review.review}"
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-sans font-semibold text-foreground text-base md:text-lg mb-1">{review.name}</p>
                      <p className="font-serif text-sm text-muted-foreground">{review.project}</p>
                    </div>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="flex justify-center items-center space-x-6 mt-8">
              <button
                className="w-9 h-9 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full flex items-center justify-center cursor-pointer transition-colors shadow-md"
                onClick={() => {
                  const swiper = (document.querySelector(".reviews-swiper") as any)?.swiper
                  if (swiper) swiper.slidePrev()
                }}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <div className="swiper-pagination !static !w-auto flex space-x-2"></div>

              <button
                className="w-9 h-9 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full flex items-center justify-center cursor-pointer transition-colors shadow-md"
                onClick={() => {
                  const swiper = (document.querySelector(".reviews-swiper") as any)?.swiper
                  if (swiper) swiper.slideNext()
                }}
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button
              size="lg"
              variant="outline"
              className="font-serif font-medium border-accent text-accent hover:bg-accent-foreground hover:text-accent  bg-transparent cursor-pointer"
              onClick={() => window.open("https://www.google.com/search?q=KET+Design+reviews", "_blank")}
            >
              More Reviews
            </Button>
          </div>
        </div>
      </section>

  {/* Footer and WhatsAppButton rendered by root layout */}
    </main>
  )
}
