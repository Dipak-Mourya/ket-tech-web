"use client"

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sourceRef = useRef<HTMLSourceElement | null>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Defer adding the <source> src until after first paint / idle so the
    // poster image displays instantly and the video request doesn't block.
    const v = videoRef.current;
    const s = sourceRef.current;
    if (!v || !s) return;

    let rafId: number | null = null;
    let rafId2: number | null = null;
    let idleId: number | null = null;

    const onCanPlay = () => setVideoLoaded(true);

    const loadVideo = () => {
      // Move the data-src into src to start loading the media
      const dataSrc = s.getAttribute("data-src");
      if (!dataSrc) return;
      s.src = dataSrc;
      // Tell the video element to (re)load now that the source is attached
      v.load();

      // Try playing; swallow promise rejections (browsers may block autoplay)
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});

      v.addEventListener("canplay", onCanPlay, { once: true });
    };

    // Prefer requestIdleCallback so this runs when the browser is idle;
    // fallback to double requestAnimationFrame which runs after paint.
    if ((window as any).requestIdleCallback) {
      idleId = (window as any).requestIdleCallback(loadVideo, { timeout: 300 });
    } else {
      rafId = requestAnimationFrame(() => {
        rafId2 = requestAnimationFrame(loadVideo);
      });
    }

    return () => {
      if (idleId != null && (window as any).cancelIdleCallback) {
        (window as any).cancelIdleCallback(idleId);
      }
      if (rafId != null) cancelAnimationFrame(rafId);
      if (rafId2 != null) cancelAnimationFrame(rafId2);
      v.removeEventListener("canplay", onCanPlay);
    };
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        ref={videoRef}
        id="hero-video"
        className={`absolute inset-0 w-full h-full object-cover pointer-events-none select-none transition-opacity duration-700 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        muted
        loop
        playsInline
        preload="none" // don't preload; we'll attach source after paint/idle
        poster="/placeholder.svg" // keep a lightweight poster so the page feels instant
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
        onContextMenu={(e) => e.preventDefault()}
        tabIndex={-1}
        aria-hidden="true"
      >
        {/* data-src used so the browser doesn't start fetching until we set src */}
        <source ref={sourceRef} data-src="/video/home-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

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
