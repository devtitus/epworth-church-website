import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";
import { organizations, organizationHeroSectionDefaults } from "@/data/organizations";

interface OrgHeroProps {
  slug: string;
}

const OrgHero = ({ slug }: OrgHeroProps) => {
  const heroData = organizations[slug];

  if (!heroData) {
    return null;
  }

  const { name, tagline, description, heroImage } = heroData;
  const nameParts = name.split(" ");
  const lastName = nameParts.pop() || "";
  const firstName = nameParts.join(" ");

  return (
    <section
      className="relative w-full bg-[var(--background)] py-12 md:py-20 lg:py-24"
      aria-label={organizationHeroSectionDefaults.ariaLabel}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-start">
          {/* Left Column - Content */}
          <div className="order-1 md:order-1">
            <span className="inline-block text-[var(--color-highlight)] text-sm font-semibold uppercase tracking-widest mb-4">
              {tagline || organizationHeroSectionDefaults.taglineFallback}
            </span>

            <h1
              id="org-hero-heading"
              className="text-3xl md:text-4xl font-bold text-[var(--foreground)] leading-tight mb-6"
            >
              {firstName}{" "}
              <span className="text-[var(--accent-2)]">{lastName}</span>
            </h1>

            <p className="text-base text-[var(--color-secondary-text)] leading-relaxed mb-6 md:mb-8 max-w-lg">
              {description}
            </p>

            <Link href={organizationHeroSectionDefaults.cta.href}>
              <Button variant="primary" className="text-base font-medium">
                {organizationHeroSectionDefaults.cta.label}
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </Link>
          </div>

          {/* Right Column - Image with Glassmorphism Frame */}
          <div className="order-2 md:order-2">
            <div
              className="relative p-4 rounded-3xl border border-[var(--border-highlight)] backdrop-blur-md"
              style={{ background: "var(--card-shade)" }}
            >
              <div className="relative aspect-[4/3] rounded-2xl border border-[var(--border-highlight)] overflow-hidden">
                <Image
                  src={heroImage}
                  alt={`${name} - ${organizationHeroSectionDefaults.image.altSuffix}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrgHero;
