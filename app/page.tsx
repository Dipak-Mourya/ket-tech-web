import type { Metadata } from "next";
import { generateSEO, seoConfigs } from "@/lib/seo";
import dynamic from "next/dynamic";

import { HeroSection } from "@/components/sections/hero-section";
import { DesignServices } from "@/components/sections/design-services";
import { OurOfferings } from "@/components/our-offerings";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Statistics } from "@/components/sections/statistics";
import { Location } from "@/components/location";
import { FAQ } from "@/components/sections/faq";

// Small, lightweight loading fallback used while dynamic sections load
const Loading = ({ msg = "Loading..." }: { msg?: string }) => (
  <div aria-busy className="py-12 text-center text-gray-500">{msg}</div>
);

// Lazy-loaded (code-split) sections to reduce initial bundle size
const LatestProjects = dynamic(
  () => import("@/components/sections/latest-projects").then((m) => m.LatestProjects),
  { loading: () => <Loading msg="Loading projects..." /> }
);

const Testimonials = dynamic(
  () => import("@/components/sections/testimonials").then((m) => m.Testimonials),
  { loading: () => <Loading msg="Loading testimonials..." /> }
);

const MediaCoverage = dynamic(
  () => import("@/components/media-coverage").then((m) => m.MediaCoverage),
  { loading: () => <Loading msg="Loading media coverage..." /> }
);

const ContactForm = dynamic(
  () => import("@/components/contact-form").then((m) => m.ContactForm),
  { loading: () => <Loading msg="Loading contact form..." /> }
);

export const metadata: Metadata = generateSEO(seoConfigs.home);

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <DesignServices />
      <LatestProjects />
      <OurOfferings />
      <WhyChooseUs />
      <Statistics />
      <Testimonials />
      <Location />
      <MediaCoverage />
      <FAQ />
      <ContactForm />
    </main>
  );
}
