import { servicesData } from "@/data";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function DesignServices() {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 relative">
          {/* Decorative elements */}

          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Our Design Services
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive design solutions tailored to your unique
            needs and vision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <Card
              key={service.id}
              className="group text-center transition-all duration-500 hover:shadow-2xl hover:scale-105 bg-gradient-to-br from-background to-muted/30 border-0 shadow-lg relative overflow-hidden"
            >
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-accent/10 to-transparent"></div>

              <CardContent className="p-8 relative">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-2xl  text-accent text-3xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg ">
                  <Image
                    draggable={false}
                    src={service.image}
                    alt={service.title}
                    width={80}
                    height={80}
                    className="rounded-2xl object-contain"
                    loading="lazy"
                  />
                </div>

                <h3 className="text-xl font-semibold mb-4 font-serif text-foreground group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
