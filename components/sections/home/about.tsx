import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ourStorySection } from "@/data/ourStorySection";

const About = () => {
  const { sectionLabel, title, image, paragraphs, stats, cta } =
    ourStorySection;

  return (
    <section
      className="relative w-full py-20 lg:py-24 bg-[var(--background)]"
      aria-labelledby="about-heading"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Church Image with Glass Effect Card */}
          <div className="order-1 lg:order-1">
            <div
              className="relative p-4 rounded-3xl border border-[var(--border-highlight)] backdrop-blur-lg"
              style={{ background: "var(--card-shade)" }}
            >
              {/* Image Container */}
              <div className="relative aspect-[1/1] rounded-2xl overflow-hidden border border-[var(--border-highlight)]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Stats overlay */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-5 border-t"
                  style={{
                    background: "rgba(211, 213, 215, 0.3)",
                    backdropFilter: "blur(12px)",
                    borderColor: "rgba(5, 5, 23, 0.1)",
                  }}
                >
                  <div className="flex justify-center gap-6">
                    {stats.map((stat, index) => (
                      <div key={index} className="flex items-center gap-6">
                        <div className="text-center">
                          <p className="text-xl font-bold text-white">
                            {stat.value}
                          </p>
                          <p className="text-xs text-white/70">{stat.label}</p>
                        </div>
                        {index < stats.length - 1 && (
                          <div className="w-px h-8 bg-white/20" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - About Content */}
          <div className="order-2 lg:order-2">
            <header>
              {/* Section Label */}
              <span className="inline-block text-[var(--color-highlight)] text-sm font-semibold uppercase tracking-widest mb-4">
                {sectionLabel}
              </span>

              {/* Title */}
              <h2
                id="about-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--foreground)] leading-tight mb-6"
              >
                {title.prefix}{" "}
                <span className="text-[var(--accent-2)]">
                  {title.highlighted}
                </span>
              </h2>
            </header>

            {/* About Message */}
            <div className="mb-8">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-base text-[var(--color-secondary-text)] leading-relaxed ${
                    index < paragraphs.length - 1 ? "mb-4" : ""
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* CTA Button */}
            <Link href={cta.href}>
              <Button variant="primary" className="text-base font-medium">
                {cta.label}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;