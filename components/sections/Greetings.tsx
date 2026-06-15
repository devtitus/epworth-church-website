import Image from "next/image";
import { greetingSection, aboutGreetingSection } from "@/data/greetingSection";

type GreetingData = typeof greetingSection | typeof aboutGreetingSection;

interface GreetingsProps {
  data?: GreetingData;
  sectionLabel?: string;
  titlePrefix?: string;
  titleHighlighted?: string;
  paragraphs?: readonly string[];
  pastorName?: string;
  pastorTitle?: string;
  pastorHeroImageSrc?: string;
  pastorHeroImageAlt?: string;
  pastorThumbnailSrc?: string;
  pastorThumbnailAlt?: string;
  ariaLabelledby?: string;
}

const Greetings = ({
  data = greetingSection,
  sectionLabel,
  titlePrefix,
  titleHighlighted,
  paragraphs,
  pastorName,
  pastorTitle,
  pastorHeroImageSrc,
  pastorHeroImageAlt,
  pastorThumbnailSrc,
  pastorThumbnailAlt,
  ariaLabelledby = "greetings-heading",
}: GreetingsProps) => {
  const label = sectionLabel ?? data.sectionLabel;
  const prefix = titlePrefix ?? data.title.prefix;
  const highlighted = titleHighlighted ?? data.title.highlighted;
  const textParagraphs = paragraphs ?? data.paragraphs;
  const pName = pastorName ?? data.pastor.name;
  const pTitle = pastorTitle ?? data.pastor.title;
  const pHeroSrc = pastorHeroImageSrc ?? data.pastor.heroImage.src;
  const pHeroAlt = pastorHeroImageAlt ?? data.pastor.heroImage.alt;
  const pThumbSrc = pastorThumbnailSrc ?? data.pastor.thumbnailImage.src;
  const pThumbAlt = pastorThumbnailAlt ?? data.pastor.thumbnailImage.alt;

  return (
    <section
      className="relative w-full py-[clamp(4rem,8vw,6rem)] bg-[var(--background)]"
      aria-labelledby={ariaLabelledby}
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Greeting Content */}
          <div className="order-2 lg:order-1">
            <header>
              {/* Section Label */}
              <span className="inline-block text-[var(--color-highlight)] text-sm font-semibold uppercase tracking-widest mb-4">
                {label}
              </span>

              {/* Title */}
              <h2
                id={ariaLabelledby}
                className="font-bold text-[var(--foreground)] leading-tight mb-6"
              >
                {prefix}{" "}
                <span className="text-[var(--accent-2)]">{highlighted}</span>
              </h2>
            </header>

            {/* Greeting Message */}
            <div className="mb-8">
              {textParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-base text-[var(--color-secondary-text)] leading-relaxed ${
                    index < textParagraphs.length - 1 ? "mb-4" : ""
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Pastor Info */}
            <div className="flex items-center gap-4 pt-6 border-t border-[var(--color-highlight)]/10">
              <div className="w-14 h-14 rounded-full bg-[var(--accent-3)] border-2 border-[var(--border-highlight)] overflow-hidden flex-shrink-0">
                <Image
                  src={pThumbSrc}
                  alt={pThumbAlt}
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
              <div>
                <p className="text-base font-bold text-[var(--foreground)]">
                  {pName}
                </p>
                <p className="text-sm text-[var(--color-highlight)]">
                  {pTitle}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Pastor Image with Glass Effect */}
          <div className="order-1 lg:order-2">
            <div
              className="relative p-4 rounded-3xl border border-[var(--border-highlight)] backdrop-blur-md"
              style={{ background: "var(--card-shade)" }}
            >
              {/* Image Container */}
              <div className="relative aspect-[1/1] rounded-2xl border border-[var(--border-highlight)] overflow-hidden">
                <Image
                  src={pHeroSrc}
                  alt={pHeroAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  unoptimized
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Glass info overlay */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-6 border-t"
                  style={{
                    background: "rgba(211, 213, 215, 0.3)",
                    backdropFilter: "blur(12px)",
                    borderColor: "rgba(5, 5, 23, 0.1)",
                  }}
                >
                  <p className="text-white font-semibold">{pName}</p>
                  <p className="text-white/70 text-sm">{pTitle}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Greetings;