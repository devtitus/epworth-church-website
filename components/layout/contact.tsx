"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle, Heart } from "lucide-react";

interface ContactSectionProps {
  tagline?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

const ContactSection = ({
  tagline = "Let's Connect",
  title = "We'd Love to Hear From You",
  description = "Whether you have a question about our church, events, or just want to say hello — we're here to help.",
  buttonText = "Get In Touch",
  buttonHref = "/contact",
}: ContactSectionProps) => {
  return (
    <section
      className="relative w-full py-16 lg:py-24 bg-[var(--background-2)]"
      aria-labelledby="contact-cta-heading"
    >
      {/* Background subtle gradient */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(239, 200, 139, 0.4) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Card with Glassmorphism - Accent 3 gradient: dark to light */}
        <div 
          className="rounded-3xl border border-[var(--border-highlight)] backdrop-blur-lg shadow-xs overflow-hidden"
          style={{ background: 'linear-gradient(0deg, var(--gradient-shade-2) 0%, var(--gradient-shade-1) 100%)' }}
        >
          {/* Inner content area */}
          <div className="px-8 py-8 lg:px-16 lg:py-12">

            {/* Tagline - glassmorphism pill */}
            <div className="mb-6">
              <span 
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium"
                style={{ background: 'linear-gradient(0deg, rgba(211, 213, 215, 0.7) 0%, rgba(211, 213, 215, 0.3) 100%)' }}
              >
                <Heart className="w-4 h-4 text-[var(--color-highlight)] fill-current" />
                <span className="text-[var(--color-highlight)]">{tagline}</span>
              </span>
            </div>

            {/* Title */}
            <h2
              id="contact-cta-heading"
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--background)] leading-tight mb-4"
            >
              {title.split(' ').map((word, i) => 
                word.toLowerCase().includes('you') || word.toLowerCase().includes('from') ? (
                  <span key={i} className="text-[var(--accent-5)]"> {word}</span>
                ) : (
                  <span key={i}> {word}</span>
                )
              )}
            </h2>

            {/* Description */}
            <p className="text-white/60 text-lg max-w-2xl mb-10">
              {description}
            </p>

            {/* Button and content row */}
            <div className="flex flex-wrap items-end justify-between gap-6">
              {/* Trust badges */}
              <div className="flex flex-wrap gap-4">
                <div 
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm"
                  style={{ background: 'linear-gradient(0deg, rgba(211, 213, 215, 0.5) 0%, rgba(211, 213, 215, 0.2) 100%)' }}
                >
                  <div className="w-2 h-2 rounded-full bg-green-600" />
                  <span className="text-[var(--color-secondary-text)]">We respond within 24 hours</span>
                </div>
                <div 
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm"
                  style={{ background: 'linear-gradient(0deg, rgba(211, 213, 215, 0.5) 0%, rgba(211, 213, 215, 0.2) 100%)' }}
                >
                  <div className="w-2 h-2 rounded-full bg-[var(--color-highlight)]" />
                  <span className="text-[var(--color-secondary-text)]">All inquiries welcome</span>
                </div>
              </div>

              {/* CTA Button - on the right */}
              <Link
                href={buttonHref}
                className="group relative inline-flex items-center gap-3 px-10 py-4 border border-[var(--border-highlight)] backdrop-blur-lg text-[var(--foreground)] font-semibold text-lg rounded-xl transition-all duration-300 hover:bg-[var(--color-highlight)] hover:text-white hover:border-transparent hover:shadow-lg hover:shadow-[var(--color-highlight)]/25"
                style={{ background: 'linear-gradient(0deg, rgba(211, 213, 215, 0.8) 0%, rgba(211, 213, 215, 0.3) 100%)' }}
              >
                <span>{buttonText}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
