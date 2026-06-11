import Image from "next/image";

const AboutHero = () => {
  return (
    <section
      className="relative w-full bg-[var(--background)] py-16 sm:py-20 lg:py-24"
      aria-labelledby="about-hero-heading"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 lg:items-center">
          <div className="lg:col-span-5">
            <h1
              id="about-hero-heading"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--foreground)] uppercase tracking-[0.02em] leading-[1.05]"
            >
              About <span className="text-[var(--accent-5)]">us</span>
            </h1>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-8 lg:gap-10">
            <figure className="relative w-full aspect-[3/2] rounded-2xl border border-[var(--border-highlight)] bg-[var(--card-shade)] overflow-hidden">
              <Image
                src="/about/hero.jpg"
                alt="Featured photograph for the About Us page"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
                priority
              />
            </figure>

            <div>
              <h2
                id="about-our-beginning-heading"
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--foreground)] leading-tight mb-4"
              >
                Our <span className="text-[var(--accent-2)]">Beginning</span>
              </h2>
              <div className="space-y-4 text-base text-[var(--color-secondary-text)] leading-relaxed max-w-2xl">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Ullamcorper vestibulum
                  adipiscing commodo condimentum auctor cras ut porttitor non.
                  In nec neque iaculis malesuada.
                </p>
                <p>
                  Imperdiet est facilisis fermentum dignissim vitae nisi
                  consectetur. Accumsan semper volutpat blandit egestas. Neque
                  curabitur et orci pellentesque ante nec facilisi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
