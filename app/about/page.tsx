import type { Metadata } from "next";
import {
  AboutHero,
  OurHistory,
  AboutGreetings,
  PreachingCenter,
  InCharge,
} from "@/components/sections/index";
import { aboutGreetingSection } from "@/data/greetingSection";
import { aboutHistorySection } from "@/data/ourStorySection";
import { Contact } from "@/components/layout/index";

export const metadata: Metadata = {
  title: "About Us | Epworth Methodist Tamil Church",
  description:
    "Learn about The Epworth Methodist Tamil Church — our story, history, and community.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutGreetings
        data={aboutGreetingSection}
        ariaLabelledby="about-greetings-heading"
      />
      <OurHistory
        data={aboutHistorySection}
        ariaLabelledby="our-history-heading"
      />
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
