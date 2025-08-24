"use client"

import { useEffect, useState, useRef } from "react"
import CountUp from "react-countup"

const stats = [
  { number: 18, suffix: "+", label: "Years in Business" },
  { number: 5000, suffix: "+", label: "Completed Projects" },
  { number: 4.9, suffix: "", label: "Avg. Google Ratings" },
]

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="font-geist font-bold text-4xl md:text-5xl text-accent">
                {isVisible && (
                  <CountUp end={stat.number} duration={2} decimals={stat.number === 4.9 ? 1 : 0} suffix={stat.suffix} />
                )}
              </div>
              <p className="font-manrope text-lg text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
