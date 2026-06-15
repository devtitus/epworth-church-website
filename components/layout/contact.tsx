"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle, Heart } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { homeContactSection } from "@/data/contactSections";

interface ContactSectionProps {
  tagline?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

const ContactSection = ({
  tagline = homeContactSection.tagline,
  title = homeContactSection.title,
  description = homeContactSection.description,
  buttonText = homeContactSection.buttonText,
  buttonHref = homeContactSection.buttonHref,
}: ContactSectionProps) => {
  return (
    <section
      className="relative w-full py-[clamp(4rem,6vw,6rem)] bg-[var(--background-2)]"
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
          <div className="px-[clamp(2rem,4vw,4rem)] py-[clamp(2rem,4vw,3rem)]">

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
              className="text-[clamp(1.75rem,3vw+1rem,2.5rem)] font-bold text-[var(--background)] leading-tight mb-4"
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
            <p className="text-white/70 text-base max-w-2xl mb-8">
              {description}
            </p>

            {/* Button and content row */}
            <div className="flex flex-wrap items-end justify-between gap-6">
              {/* Trust badges */}
              <div className="flex flex-wrap gap-4">
                {homeContactSection.badges.map((badge, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm"
                    style={{ background: 'linear-gradient(0deg, rgba(211, 213, 215, 0.5) 0%, rgba(211, 213, 215, 0.2) 100%)' }}
                  >
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: badge.color }} />
                    <span className="text-[var(--color-secondary-text)]">{badge.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button - on the right */}
              <Link href={buttonHref}>
                <Button variant="primary" className="px-10">
                  {buttonText}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;