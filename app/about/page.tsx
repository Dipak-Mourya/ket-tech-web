import type { Metadata } from "next"
import { generateSEO, seoConfigs } from "@/lib/seo"
import AboutPage from "@/components/about"

export const metadata: Metadata = generateSEO(seoConfigs.about)

export default function About() {
  return <AboutPage />
}
