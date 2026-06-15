import Image from "next/image";
import { aboutHeroSection } from "@/data/heroSection";

const AboutHero = () => {
  return (
    <section
      className="relative w-full bg-[var(--background)] py-[clamp(4rem,8vw,6rem)]"
      aria-label={aboutHeroSection.ariaLabel}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 lg:items-center">
          <div className="lg:col-span-5">
            <h1
              id="about-hero-heading"
              className="font-bold text-[var(--foreground)] uppercase tracking-[0.02em] leading-[1.05]"
            >
              {aboutHeroSection.title.prefix}{" "}
              <span className="text-[var(--accent-5)]">
                {aboutHeroSection.title.highlighted}
              </span>
            </h1>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-8 lg:gap-10">
            <figure className="relative w-full aspect-[3/2] rounded-2xl border border-[var(--border-highlight)] bg-[var(--card-shade)] overflow-hidden">
              <Image
                src={aboutHeroSection.image.src}
                alt={aboutHeroSection.image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
                priority
              />
            </figure>

            <div>
              <h2
                id="about-our-beginning-heading"
                className="font-bold text-[var(--foreground)] leading-tight mb-4"
              >
                {aboutHeroSection.subtitle.prefix}{" "}
                <span className="text-[var(--accent-2)]">
                  {aboutHeroSection.subtitle.highlighted}
                </span>
              </h2>
              <div className="space-y-4 text-base text-[var(--color-secondary-text)] leading-relaxed max-w-2xl">
                {aboutHeroSection.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
