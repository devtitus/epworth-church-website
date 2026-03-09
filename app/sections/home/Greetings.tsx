import Image from "next/image";

const Greetings = () => {
  return (
    <section
      className="relative w-full py-20 lg:py-24 bg-[var(--color-background)]"
      aria-labelledby="greetings-heading"
    >
      {/* Background accents */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-highlight)]/5 rounded-full blur-[100px]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 bg-red-900/5 rounded-full blur-[80px]"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Greeting Content */}
          <div className="order-2 lg:order-1">
            <header>
              {/* Section Label */}
              <span className="inline-block text-[var(--color-highlight)] text-sm font-semibold uppercase tracking-widest mb-4">
                From Our Pastor
              </span>

              {/* Title */}
              <h2
                id="greetings-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-primary-text)] leading-tight mb-6"
              >
                A Message of{" "}
                <span className="text-[var(--color-highlight)]">Welcome</span>
              </h2>
            </header>

            {/* Greeting Message */}
            <div className="mb-8">
              <p className="text-lg text-[var(--color-secondary-text)] leading-relaxed mb-4">
                Dear Brothers and Sisters in Christ,
              </p>
              <p className="text-base text-[var(--color-secondary-text)] leading-relaxed mb-4">
                I am delighted to welcome you to our church website! Our church
                is a vibrant community of God-fearing believers, passionate
                about growing in our relationship with the Lord and sharing His
                love with others. We have various organizations and ministries
                catering to different age groups, from children to seniors,
                designed to nurture and equip individuals to fulfill their
                God-given potential.
              </p>
              <p className="text-base text-[var(--color-secondary-text)] leading-relaxed mb-4">
                Whether you are seeking a spiritual home, looking for
                fellowship, or simply exploring the Christian faith, we invite
                you to join us on this journey of faith!
              </p>
              <p className="text-base text-[var(--color-secondary-text)] leading-relaxed mb-2">
                May you experience the love, joy, and peace of our Lord Jesus
                Christ as you navigate our website and get to know our church
                family.
              </p>
              <p className="text-base text-[var(--color-secondary-text)] leading-relaxed">
                With blessings and warm regards,
              </p>
            </div>

            {/* Pastor Info */}
            <div className="flex items-center gap-4 pt-6 border-t border-[var(--color-highlight)]/10">
              <div className="w-14 h-14 rounded-full bg-white border-2 border-[var(--color-highlight)]/20 overflow-hidden flex-shrink-0">
                <Image
                  src="/home/pastors-image.png"
                  alt="Rev. Dr. Samuel Matthew"
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
              <div>
                <p className="text-base font-bold text-[var(--color-primary-text)]">
                  Rev. Alvin Raj
                </p>
                <p className="text-sm text-[var(--color-highlight)]">
                  Senior Pastor
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Pastor Image with Glass Effect */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Glass frame effect */}
              <div
                className="absolute -inset-4 backdrop-blur-md rounded-3xl border border-[var(--border-highlight)]"
                style={{ background: 'linear-gradient(0deg, rgba(147, 20, 13, 0.10) 50%, rgba(255, 255, 255, 0.2) 100%)' }}
                aria-hidden="true"
              />

              {/* Image Container */}
              <div className="relative aspect-[1/1] rounded-2xl border border-[var(--border-highlight)] overflow-hidden">
                <Image
                  src="/home/pastors-image.png"
                  alt="Rev. Alvin Raj - Senior Pastor"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  unoptimized
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Glass info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-white/10 backdrop-blur-md border-t border-white/20">
                  <p className="text-white font-semibold">Rev. Alvin Raj</p>
                  <p className="text-white/70 text-sm">Senior Pastor</p>
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
