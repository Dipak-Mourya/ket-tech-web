"use client"

import { useEffect, useState, useRef } from "react"
import CountUp from "react-countup"
import { statisticsData } from "@/data"

export function Statistics() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {statisticsData.map((stat) => (
            <div key={stat.id} className="space-y-2">
              <div className="font-sans font-bold text-4xl md:text-5xl text-foreground">
                {isVisible && (
                  <CountUp
                    end={Number.parseInt(stat.number)}
                    duration={2}
                    decimals={stat.number.includes(".") ? 1 : 0}
                    suffix={stat.suffix}
                  />
                )}
              </div>
              <p className="font-serif text-lg text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
