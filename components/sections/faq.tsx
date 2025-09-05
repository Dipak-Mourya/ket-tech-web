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
    <section className="py-20 bg-gradient-to-br from-muted/20 via-muted/30 to-muted/40 relative">
     

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          {/* Enhanced decorative header */}
         
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="font-serif text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our interior design services and process.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqData.map((faq) => (
            <Card key={faq.id} className="group overflow-hidden bg-gradient-to-r from-white/60 to-white/40 backdrop-blur-sm border border-white/30 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
              <CardContent className="p-0">
                <button
                  className="w-full p-5 md:p-6 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-white/40 hover:to-white/20 transition-all duration-300 cursor-pointer group-hover:bg-white/30 rounded-lg"
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <h3 className="font-sans font-semibold text-sm md:text-lg text-foreground pr-4 group-hover:text-accent transition-colors duration-300">{faq.question}</h3>
                  <div className="flex-shrink-0 p-2 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors duration-300">
                    {openIndex === faq.id ? (
                      <ChevronUp className="h-4 w-4 md:h-5 md:w-5 text-accent" />
                    ) : (
                      <ChevronDown className="h-4 w-4 md:h-5 md:w-5 text-accent" />
                    )}
                  </div>
                </button>
                {openIndex === faq.id && (
                  <div className="px-6 pb-6 md:px-8 md:pb-8">
                    <div className="p-4 bg-gradient-to-r from-muted/20 to-transparent rounded-xl border-l-4 border-accent/40">
                      <p className="font-serif text-sm md:text-base text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
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
