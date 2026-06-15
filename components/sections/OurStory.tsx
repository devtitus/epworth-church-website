import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ourStorySection, aboutHistorySection } from "@/data/ourStorySection";

type StoryData = typeof ourStorySection | typeof aboutHistorySection;

interface OurStoryProps {
  data?: StoryData;
  sectionLabel?: string;
  titlePrefix?: string;
  titleHighlighted?: string;
  paragraphs?: readonly string[];
  imageSrc?: string;
  imageAlt?: string;
  aspectRatio?: "1/1" | "4/3";
  showStats?: boolean;
  stats?: readonly { value: string; label: string }[];
  showCta?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
  reverseOnMobile?: boolean;
  ariaLabelledby?: string;
}

const OurStory = ({
  data = ourStorySection,
  sectionLabel,
  titlePrefix,
  titleHighlighted,
  paragraphs,
  imageSrc,
  imageAlt,
  aspectRatio,
  showStats,
  stats,
  showCta,
  ctaLabel,
  ctaHref,
  reverseOnMobile,
  ariaLabelledby = "about-heading",
}: OurStoryProps) => {
  const label = sectionLabel ?? data.sectionLabel;
  const prefix = titlePrefix ?? data.title.prefix;
  const highlighted = titleHighlighted ?? data.title.highlighted;
  const textParagraphs = paragraphs ?? data.paragraphs;
  const imgSrc = imageSrc ?? data.image.src;
  const imgAlt = imageAlt ?? data.image.alt;
  const ratio = aspectRatio ?? data.aspectRatio;
  const showStatsOverlay =
    showStats ?? ("showStats" in data ? data.showStats : false);
  const statsData = stats ?? ("stats" in data ? data.stats : []);
  const showButton = showCta ?? ("showCta" in data ? data.showCta : false);
  const btnLabel = ctaLabel ?? ("cta" in data ? data.cta.label : "");
  const btnHref = ctaHref ?? ("cta" in data ? data.cta.href : "");
  const mobileReverse =
    reverseOnMobile ??
    ("reverseOnMobile" in data ? data.reverseOnMobile : false);

  const hasImage = imgSrc !== "";

  return (
    <section
      className="relative w-full py-[clamp(4rem,8vw,6rem)] bg-[var(--background)]"
      aria-labelledby={ariaLabelledby}
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-20 ${mobileReverse ? "items-center" : "items-start"}`}
        >
          {/* Left Column - Image with Glass Effect Card */}
          <div
            className={`${mobileReverse ? "order-2 lg:order-1" : "order-1 lg:order-1"}`}
          >
            <div
              className="relative p-4 rounded-3xl border border-[var(--border-highlight)] backdrop-blur-lg"
              style={{ background: "var(--card-shade)" }}
            >
              {/* Image Container */}
              <div
                className={`relative ${ratio === "4/3" ? "aspect-[4/3]" : "aspect-[1/1]"} rounded-2xl overflow-hidden border border-[var(--border-highlight)] ${hasImage ? "" : "bg-[var(--media-placeholder)]"}`}
                role={hasImage ? undefined : "presentation"}
                aria-hidden={!hasImage}
              >
                {hasImage && (
                  <Image
                    src={imgSrc}
                    alt={imgAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                )}

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Stats overlay */}
                {showStatsOverlay && statsData.length > 0 && (
                  <div
                    className="absolute bottom-0 left-0 right-0 p-5 border-t"
                    style={{
                      background: "rgba(211, 213, 215, 0.3)",
                      backdropFilter: "blur(12px)",
                      borderColor: "rgba(5, 5, 23, 0.1)",
                    }}
                  >
                    <div className="flex justify-center gap-6">
                      {statsData.map((stat, index) => (
                        <div key={index} className="flex items-center gap-6">
                          <div className="text-center">
                            <p className="text-xl font-bold text-white">
                              {stat.value}
                            </p>
                            <p className="text-xs text-white/70">
                              {stat.label}
                            </p>
                          </div>
                          {index < statsData.length - 1 && (
                            <div className="w-px h-8 bg-white/20" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div
            className={`${mobileReverse ? "order-1 lg:order-2" : "order-2 lg:order-2"}`}
          >
            <header>
              {/* Section Label */}
              <span className="inline-block text-[var(--color-highlight)] text-sm font-semibold uppercase tracking-widest mb-4">
                {label}
              </span>

              {/* Title */}
              <h2
                id={ariaLabelledby}
                className="text-[clamp(2rem,4vw+1rem,3rem)] font-bold text-[var(--foreground)] leading-tight mb-6"
              >
                {prefix}{" "}
                <span className="text-[var(--accent-2)]">{highlighted}</span>
              </h2>
            </header>

            {/* Message */}
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

            {/* CTA Button */}
            {showButton && btnHref && (
              <Link href={btnHref}>
                <Button variant="primary" className="text-base font-medium">
                  {btnLabel}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
