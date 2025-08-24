"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "What is included in your design services?",
    answer:
      "Our design services include complete space planning, 3D visualizations, material selection, color schemes, furniture recommendations, and detailed execution drawings.",
  },
  {
    question: "How long does a typical interior design project take?",
    answer:
      "Project timelines vary based on scope and size. A typical residential project takes 4-8 weeks for design development and 8-12 weeks for complete execution.",
  },
  {
    question: "Do you provide material procurement services?",
    answer:
      "Yes, we accompany clients to vendors for material selection and can handle procurement if required. We have partnerships with trusted suppliers for quality materials.",
  },
  {
    question: "What are your design charges?",
    answer:
      "We offer transparent, fixed design charges with no percentage-based fees. Charges vary based on project scope and are discussed during the initial consultation.",
  },
  {
    question: "Do you work on commercial projects?",
    answer:
      "Yes, we handle both residential and commercial interior design projects including offices, retail spaces, restaurants, and hospitality venues.",
  },
  {
    question: "Can I see examples of your previous work?",
    answer:
      "We have an extensive portfolio of completed projects. You can view our gallery above or visit our office to see detailed project presentations.",
  },
  {
    question: "Do you provide post-completion support?",
    answer:
      "Yes, we provide comprehensive post-completion support including maintenance guidance, warranty assistance, and future modification consultations.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-geist font-bold text-3xl md:text-4xl text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="font-manrope text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our interior design services and process.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="font-geist font-semibold text-lg text-foreground pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-accent flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-accent flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="font-manrope text-muted-foreground leading-relaxed">{faq.answer}</p>
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
