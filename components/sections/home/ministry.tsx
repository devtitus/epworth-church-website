"use client";

import { MinistryCard } from "@/components/sections/home/index";
import { ministrySection } from "@/data/ministrySection";

const Ministry = () => {
  const { sectionLabel, title, description, ministries } = ministrySection;

  return (
    <section
      className="relative w-full py-16 lg:py-24 bg-[var(--background)]"
      aria-labelledby="ministry-heading"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Title and Description */}
        <header className="text-center mb-12 lg:mb-16">
          {/* Section Label */}
          <span className="inline-block text-[var(--color-highlight)] text-sm font-semibold uppercase tracking-widest mb-3">
            {sectionLabel}
          </span>

          {/* Title */}
          <h2
            id="ministry-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--foreground)] leading-tight mb-2"
          >
            {title.prefix} <span className="text-[var(--accent-2)]">{title.highlighted}</span>
          </h2>

          <p className="text-[var(--color-secondary-text)] text-base max-w-2xl mx-auto">
            {description}
          </p>
        </header>

        {/* Ministry Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {ministries.map((ministry) => (
            <MinistryCard
              key={ministry.id}
              title={ministry.title}
              description={ministry.description}
              image={ministry.image}
              href={ministry.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ministry;