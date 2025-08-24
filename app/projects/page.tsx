import type { Metadata } from "next"
import { generateSEO, seoConfigs } from "@/lib/seo"
import { ProjectsContent } from "@/components/sections/projects-content"

export const metadata: Metadata = generateSEO(seoConfigs.projects)

export default function Projects() {
  return <ProjectsContent />
}
