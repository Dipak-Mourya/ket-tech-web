import type { Metadata } from "next"
import { generateSEO, seoConfigs } from "@/lib/seo"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { companyInfo } from "@/data"
import Link from "next/link"

export const metadata: Metadata = generateSEO(seoConfigs.about)

export default function About() {
  return (
    <main className="min-h-screen">

      {/* Hero Banner */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden mt-20">
        <img
          src="/modern-office-interior-design-team-workspace.png"
          alt="About KET Design"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center">
          <h1 className="font-sans font-bold text-4xl md:text-5xl text-white mb-4">About {companyInfo.name}</h1>
          <p className="font-serif text-xl text-white/90">{companyInfo.tagline}</p>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-foreground mb-8 text-center">Our Story</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="font-serif text-lg text-muted-foreground mb-6 leading-relaxed">
                  Founded over 18 years ago, {companyInfo.name} has grown from a small design studio to Kolkata's most
                  trusted interior design firm. Our journey began with a simple vision: to create beautiful, functional
                  spaces that reflect our clients' personalities and lifestyles.
                </p>
                <p className="font-serif text-lg text-muted-foreground leading-relaxed">
                  Today, we have completed over 500 projects, earning a 98% client satisfaction rate from our satisfied
                  clients. Our commitment to transparency, quality, and innovation has made us the preferred choice for
                  discerning homeowners and businesses across Kolkata.
                </p>
              </div>
              <Card className="overflow-hidden">
                <img src="/interior-design-team.png" alt="KET Design team" className="w-full h-80 object-cover" />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Scope */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <h3 className="font-sans font-bold text-2xl text-foreground mb-4">Our Mission</h3>
              <p className="font-serif text-muted-foreground leading-relaxed">
                To transform spaces into beautiful, functional environments that enhance the quality of life for our
                clients through innovative design and exceptional service.
              </p>
            </Card>
            <Card className="p-8 text-center">
              <h3 className="font-sans font-bold text-2xl text-foreground mb-4">Our Vision</h3>
              <p className="font-serif text-muted-foreground leading-relaxed">
                To be recognized as the leading interior design firm in Eastern India, setting new standards for
                creativity, quality, and client satisfaction.
              </p>
            </Card>
            <Card className="p-8 text-center">
              <h3 className="font-sans font-bold text-2xl text-foreground mb-4">Our Scope</h3>
              <p className="font-serif text-muted-foreground leading-relaxed">
                We specialize in residential and commercial interior design, offering complete design services from
                concept to execution across Kolkata and surrounding areas.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services & Achievements */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-foreground mb-12 text-center">
              Services & Achievements
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-sans font-bold text-2xl text-foreground mb-6">Our Services</h3>
                <ul className="space-y-3 font-serif text-muted-foreground">
                  <li>• Complete Interior Design & Planning</li>
                  <li>• 3D Visualization & Rendering</li>
                  <li>• Space Planning & Layout Design</li>
                  <li>• Material Selection & Procurement</li>
                  <li>• Project Management & Execution</li>
                  <li>• Furniture Design & Custom Solutions</li>
                  <li>• Lighting Design & Installation</li>
                  <li>• Post-Completion Support & Maintenance</li>
                </ul>
              </div>
              <div>
                <h3 className="font-sans font-bold text-2xl text-foreground mb-6">Key Achievements</h3>
                <ul className="space-y-3 font-serif text-muted-foreground">
                  <li>• 15+ Years of Excellence in Interior Design</li>
                  <li>• 500+ Successfully Completed Projects</li>
                  <li>• 98% Client Satisfaction Rate</li>
                  <li>• Featured in Leading Design Magazines</li>
                  <li>• Award-winning Residential Projects</li>
                  <li>• Trusted by 50+ Corporate Clients</li>
                  <li>• Zero Compromise on Quality Promise</li>
                  <li>• 100% Transparent Pricing Policy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-foreground mb-8">Future Goals</h2>
            <p className="font-serif text-lg text-muted-foreground mb-8 leading-relaxed">
              As we look ahead, {companyInfo.name} is committed to expanding our reach while maintaining the highest
              standards of quality and service. Our future goals include embracing sustainable design practices,
              incorporating smart home technologies, and continuing to innovate in the interior design space.
            </p>
            <p className="font-serif text-lg text-muted-foreground mb-12 leading-relaxed">
              We aim to establish {companyInfo.name} as a household name across Eastern India, while never losing sight
              of our core values: transparency, quality, and client satisfaction.
            </p>
            <Link href="/projects">
              <Button
                size="lg"
                className="bg-foreground 0 text-accent-foreground font-serif font-medium cursor-pointer"
              >
                View Our Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
