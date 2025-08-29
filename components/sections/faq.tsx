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
          <p className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our interior design services and process.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq) => (
            <Card key={faq.id} className="overflow-hidden">
              <CardContent className="p-0">
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors cursor-pointer"
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <h3 className="font-sans font-semibold text-lg text-foreground pr-4">{faq.question}</h3>
                  {openIndex === faq.id ? (
                    <ChevronUp className="h-5 w-5 text-accent flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-accent flex-shrink-0" />
                  )}
                </button>
                {openIndex === faq.id && (
                  <div className="px-6 pb-6">
                    <p className="font-serif text-muted-foreground leading-relaxed">{faq.answer}</p>
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
