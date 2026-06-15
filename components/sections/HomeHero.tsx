import Image from "next/image";
import { NewsMarquee } from "@/components/ui/NewsMarquee";
import { heroSection } from "@/data/heroSection";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen min-h-[700px] overflow-hidden"
      aria-label={heroSection.ariaLabel}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroSection.image.src}
          alt={heroSection.image.alt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Sophisticated overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/70" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Column - Main Content */}
            <header className="text-center lg:text-left">
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border-highlight)] mb-6"
                style={{
                  background: "rgba(211, 213, 215, 0.2)",
                  backdropFilter: "blur(8px)",
                }}
                role="status"
              >
                <span
                  className="w-2 h-2 rounded-full bg-[var(--color-highlight)] animate-pulse"
                  aria-hidden="true"
                />
                <span className="text-white/90 text-sm font-medium">
                  {heroSection.badge.text}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-[clamp(2.5rem,5vw+1rem,4rem)] font-bold text-white leading-[1.15] mb-5">
                {heroSection.title.prefix}{" "}
                <span className="block mt-2">
                  <span className="inline-block">
                    <span className="text-[var(--accent-5)]">
                      {heroSection.title.highlighted}
                    </span>
                    {heroSection.title.suffix}
                  </span>
                </span>
              </h1>

              {/* Description */}
              <p className="text-base md:text-base text-white/80 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                {heroSection.description}
              </p>
            </header>

            {/* Right Column - Updates Marquee */}
            <aside
              className="w-full max-w-md mx-auto lg:ml-auto lg:mr-0 mt-8 lg:mt-0"
              aria-label="Latest Church Updates"
            >
              <NewsMarquee />
            </aside>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce"
        aria-hidden="true"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
