"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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
                At KET Design, we don’t just design interiors — we craft
                personalized, timeless spaces that reflect your lifestyle and
                values.
              </p>
              <p className="font-sans text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                We use only premium materials and proven techniques to ensure
                long-lasting quality. From consultation to final handover, we
                handle every detail with care and transparency.
              </p>
              <p className="font-sans text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                Our client-first approach, on-time delivery, and commitment to
                elegant functionality set us apart in every project.
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
                src="/about/modern-office-interior-design-team-workspace.png"
                alt="Professional interior design team"
                className="w-full h-96 object-cover"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
