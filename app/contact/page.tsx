import type { Metadata } from "next";
import { ContactForm, ContactInfo } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Contact Us | Epworth Methodist Tamil Church",
  description:
    "Get in touch with Epworth Methodist Tamil Church. We'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-16 lg:mb-20">
          <span className="inline-block text-[var(--color-highlight)] text-sm font-semibold uppercase tracking-widest mb-3">
            Reach Out
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--foreground)] leading-tight">
            Get in <span className="text-[var(--accent-2)]">Touch</span>
          </h1>
        </header>

        {/* 2-Column Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column: Form */}
          <div className="order-2 lg:order-1">
            <ContactForm />
          </div>

          {/* Right Column: Info & Map */}
          <div className="order-1 lg:order-2">
            <ContactInfo />
          </div>
        </div>
      </div>
    </main>
  );
}
