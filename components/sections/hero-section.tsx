"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CostCalculator } from "@/components/cost-calculator";
import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  const [showMobileCalculator, setShowMobileCalculator] = useState(false);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        id="hero-video"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/fallback/modern-interior-design-living-room.webp"
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
        onContextMenu={(e) => e.preventDefault()}
        tabIndex={-1}
        aria-hidden="true"
      >
        <source src="/video/home-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 text-white px-4 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 gap-8 items-center h-full">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              <span className="my-1">Established 2015</span>
            </Badge>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 font-serif">
              Best Interior Designers in Kolkata
            </h1>
            <p className="text-sm md:text-lg lg:text-xl mb-2 leading-relaxed opacity-90 max-w-[50rem]">
              Experience unmatched transparency and peace of mind in interior
              design with KET Design – Your Space, Our Passion.
            </p>

            {/* CTA Button */}
            <div className="mt-8">
              <Button
                onClick={() => setShowMobileCalculator(true)}
                className="bg-foreground text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 md:text-lg text-sm cursor-pointer"
              >
                Start Design Journey
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Cost Calculator Modal */}
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
    </section>
  );
}
