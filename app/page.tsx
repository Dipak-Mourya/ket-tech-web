import type { Metadata } from "next";
import { generateSEO, seoConfigs } from "@/lib/seo";

import { DesignServices } from "@/components/sections/design-services";
import { LatestProjects } from "@/components/sections/latest-projects";
import { OurOfferings } from "@/components/our-offerings";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Statistics } from "@/components/sections/statistics";
import { Testimonials } from "@/components/sections/testimonials";
import { Location } from "@/components/location";
import { OurCustomer } from "@/components/our-customer";
import { FAQ } from "@/components/sections/faq";
import { ContactForm } from "@/components/contact-form";
import { HeroSection } from "@/components/sections/hero-section";

export const metadata: Metadata = generateSEO(seoConfigs.home);

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <DesignServices />
      <LatestProjects />
      <WhyChooseUs />
      <OurOfferings />
      <Statistics />
      <Testimonials />
      <Location />
      <OurCustomer />
      <FAQ />
      <ContactForm />
    </main>
  );
}
