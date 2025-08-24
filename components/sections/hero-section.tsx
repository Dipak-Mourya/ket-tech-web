"use client"

import React from "react";

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/modern-interior-design-living-room-with-elegant-fu.png')`
        }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 text-white px-4 max-w-7xl mx-auto w-full">
        <div className="flex justify-center">
          <div className="text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
              Best Interior Designers in Kolkata
            </h1>
            <p className="text-lg md:text-xl mb-8 leading-relaxed">
              Experience the highest level of transparency in interior design,
              with complete peace of mind.
            </p>

            <a
              href="/projects"
              className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg"
            >
              Discover More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
