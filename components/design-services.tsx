"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export function DesignServices() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-foreground mb-6">
              Hire Just the Design Services
            </h2>
            <p className="font-sans text-lg text-muted-foreground mb-8 leading-relaxed">
              Get complete control over the budget with our transparent design-only services. No hidden costs, no
              percentage-based fees - just pure design excellence.
            </p>
            <Link href="/about">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-medium cursor-pointer"
              >
                Know More →
              </Button>
            </Link>
          </div>
          <div className="relative">
            <Card className="overflow-hidden">
              <img
                src="/modern-interior-design-living-room-with-elegant-fu.png"
                alt="Modern interior design showcase"
                className="w-full h-80 object-cover"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
