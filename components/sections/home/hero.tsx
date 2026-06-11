import Image from "next/image";
import { NewsMarquee } from "./NewsMarquee";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen min-h-[700px] overflow-hidden"
      aria-label="Welcome to Epworth Methodist Tamil Church"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/home/1.jpg"
          alt="Epworth Methodist Tamil Church - Our church building and congregation"
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
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
                  Est. 1874 • A Heritage of Faith
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-white leading-[1.15] mb-5">
                Epworth Methodist{" "}
                <span className="block mt-2">
                  <span className="inline-block">
                    <span className="text-[var(--accent-5)]">Tamil </span>Church
                  </span>
                </span>
              </h1>

              {/* Description */}
              <p className="text-base md:text-base text-white/80 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                Find your place in our story. At Epworth MTC, faith, community,
                and hope converge. We are a vibrant family dedicated to
                following Christ and serving our city with love. We invite you
                to join our Sunday worship and discover a community where you
                are known, loved, and encouraged to grow. You aren’t just a
                visitor here—you’re family.
              </p>
            </header>

            {/* Right Column - Updates Marquee */}
            <aside
              className="hidden lg:block w-full max-w-md ml-auto"
              aria-label="Latest Church Updates"
            >
              <NewsMarquee />
            </aside>
          </div>

          {/* Mobile Latest Updates */}
          <div className="lg:hidden mt-10" aria-label="Latest Church Updates">
            <NewsMarquee />
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
