import type { Metadata } from "next"

interface SEOProps {
  title: string
  description: string
  keywords?: string
  ogImage?: string
  url?: string
  type?: "website" | "article"
}

export function generateSEO({
  title,
  description,
  keywords,
  ogImage = "/images/og-default.jpg",
  url = "https://ketdesign.com",
  type = "website",
}: SEOProps): Metadata {
  return {
    title,
    description,
    keywords,
    robots: "index, follow",
    openGraph: {
      title,
      description,
      images: [{ url: ogImage }],
      url,
      type,
      siteName: "KET Design",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: url,
    },
  }
}

// Pre-defined SEO configurations
export const seoConfigs = {
  home: {
    title: "KET Design | Innovative Architecture & Interior Solutions",
    description:
      "Discover KET Design's creative architecture, interior design, and project solutions. Explore our work, client reviews, and connect with us for professional design services.",
    keywords: "KET Design, architecture services, interior design, modern design projects, design company India",
    ogImage: "/images/og-home.jpg",
    url: "https://ketdesign.com/",
  },
  about: {
    title: "About KET Design | Company Profile, Mission & Vision",
    description:
      "Learn more about KET Design — our company profile, mission, vision, values, and the innovative approach that sets us apart in architecture and interior design.",
    keywords:
      "about KET Design, design company profile, mission and vision, architecture firm India, interior design company",
    ogImage: "/images/og-about.jpg",
    url: "https://ketdesign.com/about",
  },
  projects: {
    title: "Our Projects | KET Design Portfolio & Client Reviews",
    description:
      "Explore KET Design's portfolio — innovative projects, creative designs, and client success stories. See our customer reviews and discover why clients trust us.",
    keywords: "KET Design projects, design portfolio, architecture projects, interior design work, client reviews",
    ogImage: "/images/og-project.jpg",
    url: "https://ketdesign.com/projects",
  },
}
