import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { companyInfo, infoSections } from "@/data";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden mt-20">
        <Image
          src="/about/about-banner.webp"
          alt="About KET Design"
          width={1920}
          height={960}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center">
          <h1 className="font-serif font-bold text-4xl md:text-5xl text-white mb-4">
            About {companyInfo.name}
          </h1>
          <p className="font-serif text-xl text-white/90">
            {companyInfo.tagline}
          </p>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-8 text-center">
              Our Story
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="font-serif text-sm md:text-base lg:text-lg text-muted-foreground mb-6 leading-relaxed">
                  to inspire, comfort, and tell a story of its own. What began
                  as a small creative studio in Kolkata has today grown into a
                  trusted interior design firm, known for blending functionality
                  with timeless elegance.
                </p>
                <p className="font-serif text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                  From our very first project, we set out with a vision: to
                  create spaces that don’t just look beautiful, but feel like
                  home. Over the years, we have had the privilege of
                  transforming residences, offices, and commercial spaces across
                  Kolkata and beyond, each time crafting designs that reflect
                  the personality and lifestyle of the people who live and work
                  in them.
                </p>
                <p className="font-serif text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                  At Ket Design, we combine creativity with practicality to
                  bring clients’ dreams to life. Since 2015, we’ve crafted
                  inspiring homes and workspaces that balance style and
                  function. Our goal is to create timeless spaces that uplift
                  and endure..
                </p>
              </div>
              <Card className="overflow-hidden">
                <Image
                  src="/about/modern-office-interior-design-team-workspace.webp"
                  alt="KET Design team"
                  width={800}
                  height={400}
                  className="w-full h-80 object-cover"
                  draggable={false}
                  loading="lazy"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Scope */}
      <section className="py-20 bg-gradient-to-br from-muted/40 to-muted/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {infoSections.map((section, index) => (
              <Card
                key={index}
                className="p-8 h-full flex flex-col rounded-xl bg-white/90 backdrop-blur-md shadow-md transform transition duration-300 hover:scale-[1.03] hover:shadow-2xl"
              >
                <div className="flex flex-col items-center text-center mb-4">
                  <h3 className="font-sans font-bold text-2xl text-foreground mt-4">
                    {section.title}
                  </h3>
                </div>
                <p className="font-serif text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Achievements */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-12 text-center">
              Services & Achievements
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-sans font-bold text-2xl text-foreground mb-6">
                  Our Services
                </h3>
                <ul className="space-y-3 text-sm md:text-base font-serif text-muted-foreground list-disc list-inside">
                  <li>
                    Residential Interiors – Thoughtfully designed homes that
                    reflect lifestyle, comfort, and personality.
                  </li>
                  <li>
                    Office & Workspace Design – Modern, functional, and
                    inspiring work environments.
                  </li>
                  <li>
                    Retail & Commercial Interiors – Engaging spaces that enhance
                    customer experience and brand identity.
                  </li>
                  <li>
                    Modular Kitchens & Wardrobes – Smart, stylish, and practical
                    storage and kitchen solutions.
                  </li>
                  <li>
                    3D Design & Visualization – Bringing ideas to life with
                    realistic previews before execution.
                  </li>
                  <li>
                    Turnkey Projects – Complete end-to-end solutions, from
                    concept to execution.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-sans font-bold text-2xl text-foreground mb-6">
                  Key Achievements
                </h3>
                <ul className="space-y-3 text-sm md:text-base font-serif text-muted-foreground list-disc list-inside">
                  <li>
                    10+ Years of Creative Excellence in interior design since
                    2015.
                  </li>
                  <li>
                    300+ Successful Projects across residential, commercial, and
                    office spaces.
                  </li>
                  <li>
                    Trusted by 350+ Happy Clients with strong word-of-mouth
                    recommendations.
                  </li>
                  <li>
                    50+ Modular Kitchen & Wardrobe Installations delivering
                    stylish and practical solutions.
                  </li>
                  <li>
                    Expanding Footprint Beyond Kolkata, with projects in
                    multiple Indian cities.
                  </li>
                  <li>
                    Strong Portfolio in Premium Homes including luxury
                    apartments, villas, and penthouses.
                  </li>
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
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-8">
              Future Goals
            </h2>
            <p className="font-serif text-sm md:text-base lg:text-lg text-muted-foreground mb-8 leading-relaxed">
              At Ket Design, we believe growth is a journey—and the future is
              about taking our passion for interiors to new heights. Building on
              our experience since 2015, we are focused on expanding our reach,
              enhancing our expertise, and setting new benchmarks in design
              excellence.
            </p>
            <h3 className="font-sans font-bold text-2xl text-foreground mb-6">
              Our Goals Ahead:
            </h3>
            <ul className="space-y-3 text-sm md:text-base font-serif text-muted-foreground text-left">
              <li>
                • Expand Across India – Extend our design services to major
                cities beyond Kolkata.
              </li>
              <li>
                • Introduce Smart & Sustainable Designs – Integrate eco-friendly
                materials and smart technology for future-ready spaces.
              </li>
              <li>
                • Strengthen Turnkey Solutions – Provide more seamless,
                hassle-free project experiences for our clients.
              </li>
              <li>
                • Innovate with Advanced 3D & Virtual Reality – Allow clients to
                visualize and experience their spaces before execution.
              </li>
              <li>
                • Create Signature Projects – Develop landmark residential and
                commercial interiors that set industry standards.
              </li>
              <li>
                • Build Stronger Client Relationships – Focus on long-term
                trust, referrals, and repeat collaborations.
              </li>
              <li>
                • Expand Our Team & Expertise – Bring in new talent, creativity,
                and technical knowledge.
              </li>
            </ul>
            <p className="font-serif text-sm md:text-base lg:text-lg text-muted-foreground mt-8 leading-relaxed">
              Our vision for the future is simple yet powerful—to be recognized
              as one of India’s leading interior design firms, known for
              creativity, quality, and client satisfaction.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
