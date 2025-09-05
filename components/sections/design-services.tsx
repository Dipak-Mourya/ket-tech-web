import { servicesData } from "@/data";
import { Card, CardContent } from "@/components/ui/card";

export function DesignServices() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Our Design Services
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive design solutions tailored to your unique
            needs and vision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service) => (
            <Card
              key={service.id}
              className="text-center transition duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02]"
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-accent/10 text-accent text-2xl animate-pulse">
                  {service.icon}
                </div>

                <h3 className="text-xl font-semibold mb-3 font-serif text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
