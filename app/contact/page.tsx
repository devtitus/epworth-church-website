import type { Metadata } from "next";
import { ContactForm, ContactInfo } from "@/components/sections/index";
import { contactPageSection } from "@/data/contactPageSection";

export const metadata: Metadata = {
  title: contactPageSection.title,
  description: contactPageSection.description,
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] py-12 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-10 md:mb-16 lg:mb-20">
          <span className="inline-block text-[var(--color-highlight)] text-sm font-semibold uppercase tracking-widest mb-3">
            {contactPageSection.eyebrow}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] leading-tight mb-4">
            {contactPageSection.heading.prefix}{" "}
            <span className="text-[var(--accent-2)]">
              {contactPageSection.heading.highlighted}
            </span>
          </h1>
        </header>

        {/* 2-Column Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-start">
          {/* Left Column: Form */}
          <div className="order-2 md:order-1">
            <ContactForm />
          </div>

          {/* Right Column: Info & Map */}
          <div className="order-1 md:order-2">
            <ContactInfo />
          </div>
        </div>
      </div>
    </main>
  );
}