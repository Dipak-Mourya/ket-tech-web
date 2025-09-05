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
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
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
              className="bg-foreground  text-accent-foreground font-sans font-medium cursor-pointer"
              onClick={() => scrollToSection("contact")}
            >
              Let's Connect →
            </Button>
          </div>
          <div className="relative">
            <Card className="overflow-hidden">
              <Image
                draggable={false}
                src="/about/modern-office-interior-design-team-workspace.webp"
                alt="Professional interior design team"
                width={800}
                height={600}
                className="w-full h-96 object-cover"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
