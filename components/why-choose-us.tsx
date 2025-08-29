"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function WhyChooseUs() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-6">Why Choose Us?</h2>
            <div className="space-y-4 mb-8">
              <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                With over 18 years of experience in the interior design industry, KET Design has established itself as
                Kolkata's premier interior design firm.
              </p>
              <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                We believe in complete transparency, fixed pricing, and delivering exceptional quality that exceeds
                expectations. Our dedicated team works closely with you to bring your vision to life.
              </p>
              <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                From concept to completion, we ensure every detail is perfect, giving you complete peace of mind
                throughout the design process.
              </p>
            </div>
            <Button
              size="lg"
              className="bg-foreground  text-accent-foreground font-sans font-medium cursor-pointer"
              onClick={() => scrollToSection("contact")}
            >
              Let's Connect →
            </Button>
          </div>
          <div className="relative">
            <Card className="overflow-hidden">
              <img
                src="/projects/modern-living-room.png"
                alt="Professional interior design team"
                className="w-full h-96 object-cover"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
