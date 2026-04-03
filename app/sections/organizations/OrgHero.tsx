import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface OrgHeroProps {
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
}

const OrgHero = ({ name, tagline, description, heroImage }: OrgHeroProps) => {
  return (
    <section
      className="relative w-full bg-[var(--background)] py-20 lg:py-24"
      aria-labelledby="org-hero-heading"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-block text-[var(--color-highlight)] text-sm font-semibold uppercase tracking-widest mb-4">
              {tagline}
            </span>

            <h1
              id="org-hero-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--foreground)] leading-tight mb-6"
            >
              {name}
            </h1>

            <p className="text-base text-[var(--color-secondary-text)] leading-relaxed mb-8 max-w-lg">
              {description}
            </p>

            <Link
              href="#org-about"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--border-highlight)] text-[var(--foreground)] font-medium hover:bg-[var(--accent-3)]/20 transition-colors duration-300"
            >
              Know More
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Right Column - Image */}
          <div className="order-1 lg:order-2">
            <div className="relative w-full aspect-[4/3] rounded-2xl border border-[var(--border-highlight)] bg-[var(--card-shade)] overflow-hidden">
              <Image
                src={heroImage}
                alt={`${name} - Organization hero image`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrgHero;
