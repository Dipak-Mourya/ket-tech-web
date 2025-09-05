"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export function WhyChooseUs() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background via-muted/20 to-muted/30 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-accent/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent/2 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-6">
              Why Choose Us?
            </h2>
            <div className="space-y-4 mb-8">
              <p className="font-sans text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                At KET Design, we don’t just design spaces — we craft
                experiences. Every home, office, or commercial space we create
                is a reflection of the people who live and work in it. With a
                team of passionate designers and years of expertise, we bring
                together creativity, innovation, and practicality to deliver
                interiors that are both timeless and functional.
              </p>
              <p className="font-sans text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                We believe quality is the foundation of great design — that’s
                why we use only premium materials and proven techniques to
                deliver timeless spaces. From consultation to handover, we
                ensure a smooth, transparent, and stress-free experience through
                end-to-end solutions.
              </p>
              <p className="font-sans text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                We design with your lifestyle in mind — creating elegant,
                personalized spaces delivered on time with a client-first
                approach.
              </p>
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-foreground to-foreground/90 text-accent-foreground font-sans font-medium cursor-pointer hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl px-8 py-3 rounded-xl"
              onClick={() => scrollToSection("contact")}
            >
              Let's Connect →
            </Button>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-accent/10 to-transparent rounded-2xl"></div>
            
            <Card className="overflow-hidden shadow-2xl border-0 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
              <Image
                draggable={false}
                src="/about/modern-office-interior-design-team-workspace.webp"
                alt="Professional interior design team"
                width={800}
                height={600}
                className="w-full h-96 object-cover transition-transform duration-700 hover:scale-105"
              />
              {/* Image overlay with subtle pattern */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </Card>
            
            {/* Floating accent elements */}
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-accent/20 rounded-full blur-xl"></div>
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-accent/15 rounded-full blur-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
