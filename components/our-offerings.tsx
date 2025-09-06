import { Card, CardContent } from "@/components/ui/card";


import { Brush, Hammer, Gem, Layout, UserCheck, Layers } from "lucide-react";

const offerings = [
  {
    icon: Brush,
    title: "Customized Interior Solutions",
    description:
      "Professionally designed interiors tailored to your taste, lifestyle, and budget — making every space truly yours.",
  },
  {
    icon: Hammer,
    title: "End-to-End Execution",
    description:
      "From planning to finishing, we handle everything with precision and care for a hassle-free experience.",
  },
  {
    icon: Gem,
    title: "Premium Materials & Finishes",
    description:
      "We use top-quality materials and refined finishes that combine durability with timeless style.",
  },
  {
    icon: Layout,
    title: "Smart Space Planning",
    description:
      "Maximizing your space with intelligent layouts and functional, efficient design strategies.",
  },
  {
    icon: UserCheck,
    title: "Personalized Consultation",
    description:
      "We listen, understand, and design around your vision to create spaces that truly inspire.",
  },
  {
    icon: Layers,
    title: "Modular Kitchen & Wardrobes",
    description:
      "Stylish, space-saving modular solutions with premium finishes built for modern everyday living.",
  },
];

export function OurOfferings() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
            Our Offerings
          </h2>
          <p className="font-sans text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive interior design services tailored to meet your unique
            needs and preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                  <offering.icon className="h-8 w-8 text-accent animate-pulse" />
                </div>
                <h3 className="font-sans font-semibold text-xl text-foreground mb-3">
                  {offering.title}
                </h3>
                <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed">
                  {offering.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
