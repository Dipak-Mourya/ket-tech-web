"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"
import { faqData } from "@/data"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="font-serif text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our interior design services and process.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-4">
          {faqData.map((faq) => (
            <Card key={faq.id} className="overflow-hidden">
              <CardContent className="p-0">
                <button
                  className="w-full p-3 md:p-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors cursor-pointer"
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <h3 className="font-sans font-semibold text-sm md:text-lg text-foreground pr-4">{faq.question}</h3>
                  {openIndex === faq.id ? (
                    <ChevronUp className="h-4 w-4 md:h-5 md:w-5 text-accent flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-4 w-4 md:h-5 md:w-5 text-accent flex-shrink-0" />
                  )}
                </button>
                {openIndex === faq.id && (
                  <div className="px-4 pb-4 md:px-6 md:pb-6">
                    <p className="font-serif text-sm md:text-base text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
