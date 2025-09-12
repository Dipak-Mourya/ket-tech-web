"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { futureGoals, infoSections, services } from "@/data";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Target,
  Eye,
  Compass,
  CheckCircle,
  TrendingUp,
  Star,
  Building2,
  X,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { CostCalculator } from "./cost-calculator";
import { useState } from "react";

export default function AboutPage() {
 const [showMobileCalculator, setShowMobileCalculator] = useState(false);

  const handleContactClick = () => {
     setShowMobileCalculator(true);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-86 flex items-center justify-center overflow-hidden mt-20">
        <Image
          src="/about/about-banner.webp"
          alt="About KET Design"
          width={1920}
          height={960}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
            About KET Design
          </h1>
          <p className="font-sans text-sm md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Where creativity meets functionality, and dreams become reality
            through exceptional interior design.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-1 lg:order-1">
                <Badge
                  variant="outline"
                  className="mb-6 border-accent text-accent"
                >
                  Our Journey
                </Badge>
                <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-8">
                  Crafting Stories Through Design
                </h2>
                <div className="space-y-6">
                  <p className="font-sans text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                    Since 2015,{" "}
                    <span className="font-semibold text-foreground">
                      KET Design
                    </span>{" "}
                    has been transforming spaces into inspiring environments
                    that tell unique stories. What started as a passionate
                    vision in Kolkata has evolved into a trusted interior design
                    firm known for blending functionality with timeless
                    elegance.
                  </p>
                  <p className="font-sans text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                    From our very first project, we established a clear mission:
                    to create spaces that don't just look beautiful, but feel
                    like home. We've had the privilege of transforming
                    residences, offices, and commercial spaces, each time
                    crafting designs that reflect the personality and lifestyle
                    of our clients.
                  </p>
                  <p className="font-sans text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                    Our approach combines{" "}
                    <span className="font-semibold text-accent">
                      creativity with practicality
                    </span>
                    , ensuring every project delivers spaces that are both
                    stunning and functional. We believe great design should
                    enhance daily life while standing the test of time.
                  </p>
                </div>
                <div className="mt-8">
                  <Link href="/projects">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-medium cursor-pointer">
                      View Our Projects
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="order-2 lg:order-2">
                <Card className="overflow-hidden shadow-xl">
                  <Image
                    src="/about/why-choose-us.webp"
                    alt="KET Design team workspace"
                    width={800}
                    height={600}
                    className="w-full h-96 lg:h-[500px] object-cover"
                    draggable={false}
                    loading="lazy"
                  />
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Scope */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-muted/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-accent text-accent">
              Our Foundation
            </Badge>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
              Mission, Vision & Scope
            </h2>
            <p className="font-sans text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every design decision and client
              interaction
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {infoSections.map((section, index) => {
              const icons = [Target, Eye, Compass];
              const IconComponent = icons[index];

              return (
                <Card
                  key={index}
                  className="p-8 h-full flex flex-col rounded-xl bg-white/90 backdrop-blur-md shadow-lg border-border/50 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-serif font-bold text-xl md:text-2xl text-foreground">
                      {section.title}
                    </h3>
                  </div>
                  <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed flex-1">
                    {section.content}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services & Expertise */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge
                variant="outline"
                className="mb-4 border-primary text-primary"
              >
                What We Do
              </Badge>
              <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
                Services & Expertise
              </h2>
              <p className="font-sans text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive design solutions tailored to create exceptional
                spaces that inspire and function beautifully
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Services */}
              <Card className="p-8 h-full shadow-lg border-border/50">
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mr-4">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif font-bold text-xl md:text-2xl text-foreground">
                    Our Services
                  </h3>
                </div>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start group">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="font-sans text-sm md:text-base text-muted-foreground group-hover:text-foreground transition-colors">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Link href="/projects">
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground cursor-pointer"
                    >
                      Explore Our Work
                    </Button>
                  </Link>
                </div>
              </Card>

              {/* Key Highlights */}
              <Card className="p-8 h-full shadow-lg border-border/50">
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mr-4">
                    <Star className="h-6 w-6 text-primary bg" />
                  </div>
                  <h3 className="font-serif font-bold text-xl md:text-2xl text-foreground">
                    Why Choose Us
                  </h3>
                </div>
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-6">
                    <h4 className="font-sans font-semibold text-base text-foreground mb-2">
                      Transparent Pricing
                    </h4>
                    <p className="font-sans text-sm text-muted-foreground">
                      Fixed design packages with no hidden costs or
                      percentage-based fees
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h4 className="font-sans font-semibold text-base text-foreground mb-2">
                      Client-Centric Approach
                    </h4>
                    <p className="font-sans text-sm text-muted-foreground">
                      Personalized designs that reflect your lifestyle and
                      preferences
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-6">
                    <h4 className="font-sans font-semibold text-base text-foreground mb-2">
                      End-to-End Solutions
                    </h4>
                    <p className="font-sans text-sm text-muted-foreground">
                      Complete turnkey services from concept to final execution
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h4 className="font-sans font-semibold text-base text-foreground mb-2">
                      Quality Assurance
                    </h4>
                    <p className="font-sans text-sm text-muted-foreground">
                      On-site support and quality checks throughout the project
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge
                variant="outline"
                className="mb-4 border-accent text-accent"
              >
                Looking Ahead
              </Badge>
              <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
                Future Goals & Vision
              </h2>
              <p className="font-sans text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Building on our decade-long journey, we're focused on expanding
                our reach, enhancing expertise, and setting new benchmarks in
                design excellence across India.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                {futureGoals.map((goal, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full mr-4 mt-0.5 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <TrendingUp className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="font-sans text-sm md:text-base text-foreground font-medium block mb-1">
                        {goal}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <Card className="p-8 bg-white/80 backdrop-blur-sm shadow-xl border-border/50">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                    <Target className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="font-serif font-bold text-xl md:text-2xl text-foreground mb-4">
                    Our Vision for Tomorrow
                  </h3>
                  <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                    To be recognized as one of India's leading interior design
                    firms, known for creativity, quality, and unwavering client
                    satisfaction. We aim to create spaces that not only meet
                    today's needs but anticipate tomorrow's possibilities.
                  </p>
                  <Separator className="my-6" />
                  <div className="flex items-center justify-center space-x-8">
                    <div className="text-center">
                      <p className="font-serif font-bold text-2xl text-primary">
                        2030
                      </p>
                      <p className="font-sans text-sm text-muted-foreground">
                        Target Year
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="font-serif font-bold text-2xl text-accent">
                        Pan-India
                      </p>
                      <p className="font-sans text-sm text-muted-foreground">
                        Presence
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="font-sans text-sm md:text-lg lg:text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
              Let's collaborate to create a space that reflects your vision and
              enhances your lifestyle. Experience the KET Design difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={handleContactClick}
                variant="outline"
                className="border-white text-primary hover:bg-white hover:text-primary font-sans font-medium px-8 py-3 cursor-pointer"
              >
                Begin Your Journey
              </Button>
            </div>
          </div>
        </div>
      </section>
      {showMobileCalculator && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowMobileCalculator(false)}
          />

          {/* Modal Content */}
          <div className="relative flex items-center justify-center min-h-screen p-4">
            <div className="relative w-full max-w-sm">
              {/* Close Button */}
              <button
                onClick={() => setShowMobileCalculator(false)}
                className="absolute -top-12 right-0 p-2 text-white hover:bg-white/20 rounded-full transition-colors cursor-pointer"
                aria-label="Close calculator"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Calculator */}
              <CostCalculator />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
