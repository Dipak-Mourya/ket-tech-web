import { Card, CardContent } from "@/components/ui/card"
import { Users, Palette, DollarSign, Clock, ShoppingCart, Wrench } from "lucide-react"

const offerings = [
  {
    icon: Users,
    title: "Professional Design Team",
    description: "Dedicated team assigned to your project",
  },
  {
    icon: Palette,
    title: "Design Options",
    description: "Multiple design options until satisfaction",
  },
  {
    icon: DollarSign,
    title: "Fixed Design Charges",
    description: "No % based increasing design fees",
  },
  {
    icon: Clock,
    title: "Timely Completion",
    description: "As per agreed terms",
  },
  {
    icon: ShoppingCart,
    title: "Material Selection",
    description: "Accompany clients to vendors",
  },
  {
    icon: Wrench,
    title: "Assistance in Execution",
    description: "Support during execution",
  },
]

export function OurOfferings() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">Our Offerings</h2>
          <p className="font-sans text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive interior design services tailored to meet your unique needs and preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                  <offering.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-sans font-semibold text-xl text-foreground mb-3">{offering.title}</h3>
                <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed">{offering.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
