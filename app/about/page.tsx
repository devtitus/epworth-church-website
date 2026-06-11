import type { Metadata } from "next";
import {
  Hero,
  OurHistory,
  AboutGreetings,
  PreachingCenter,
  InCharge,
} from "@/components/sections/about";
import { Contact } from "@/components/layout/index";

export const metadata: Metadata = {
  title: "About Us | Epworth Methodist Tamil Church",
  description:
    "Learn about The Epworth Methodist Tamil Church — our story, history, and community.",
};

export default function AboutPage() {
  return (
    <main>
      <Hero />
      <AboutGreetings />
      <OurHistory />
      <PreachingCenter />
      <InCharge />
      <Contact
        tagline="Stay connected"
        title="We would love to hear from you"
        description="Questions about our church, service times, or ministries? Reach out — we are glad to help."
        buttonText="Get in touch"
        buttonHref="/contact"
      />
    </main>
  );
}
