import Image from "next/image";
import { greetingSection } from "@/data/greetingSection";

const Greetings = () => {
  const { sectionLabel, title, paragraphs, pastor } = greetingSection;

  return (
    <section
      className="relative w-full py-20 lg:py-24 bg-[var(--background)]"
      aria-labelledby="greetings-heading"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Greeting Content */}
          <div className="order-2 lg:order-1">
            <header>
              {/* Section Label */}
              <span className="inline-block text-[var(--color-highlight)] text-sm font-semibold uppercase tracking-widest mb-4">
                {sectionLabel}
              </span>

              {/* Title */}
              <h2
                id="greetings-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--foreground)] leading-tight mb-6"
              >
                {title.prefix}{" "}
                <span className="text-[var(--accent-2)]">{title.highlighted}</span>
              </h2>
            </header>

            {/* Greeting Message */}
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

            {/* Pastor Info */}
            <div className="flex items-center gap-4 pt-6 border-t border-[var(--color-highlight)]/10">
              <div className="w-14 h-14 rounded-full bg-[var(--accent-3)] border-2 border-[var(--border-highlight)] overflow-hidden flex-shrink-0">
                <Image
                  src={pastor.thumbnailImage.src}
                  alt={pastor.thumbnailImage.alt}
                  width={pastor.thumbnailImage.width}
                  height={pastor.thumbnailImage.height}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
              <div>
                <p className="text-base font-bold text-[var(--foreground)]">
                  {pastor.name}
                </p>
                <p className="text-sm text-[var(--color-highlight)]">
                  {pastor.title}
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
                  src={pastor.heroImage.src}
                  alt={pastor.heroImage.alt}
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
                  <p className="text-white font-semibold">{pastor.name}</p>
                  <p className="text-white/70 text-sm">{pastor.title}</p>
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