import Image from "next/image";

const AboutGreetings = () => {
  return (
    <section
      className="relative w-full py-20 lg:py-24 bg-[var(--background)]"
      aria-labelledby="about-greetings-heading"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — greeting copy (desktop); stacks below image on small screens */}
          <div className="order-2 lg:order-1">
            <span className="inline-block text-[var(--color-highlight)] text-sm font-semibold uppercase tracking-widest mb-4">
              Greetings
            </span>

            <h2
              id="about-greetings-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--foreground)] leading-tight mb-6"
            >
              Warmest greetings in the name of our{" "}
              <span className="text-[var(--accent-2)]">Lord Jesus Christ!</span>
            </h2>

            <div className="space-y-4 text-base text-[var(--color-secondary-text)] leading-relaxed mb-8">
              <p>
                I am delighted to welcome you to our church website! Our church
                is a vibrant community of God-fearing believers, passionate
                about growing in our relationship with the Lord and sharing His
                love with others. We have various organizations and ministries
                catering to different age groups, from children to seniors,
                designed to nurture and equip individuals to fulfill their
                God-given potential.
              </p>
              <p>
                Whether you are seeking a spiritual home, looking for
                fellowship, or simply exploring the Christian faith, we invite
                you to join us on this journey of faith!
              </p>
              <p>
                May you experience the love, joy, and peace of our Lord Jesus
                Christ as you navigate our website and get to know our church
                family.
              </p>
            </div>

            <p className="text-base text-[var(--color-secondary-text)] leading-relaxed mb-8">
              With blessings and warm regards,
            </p>

            <div className="flex items-center gap-4 pt-6 border-t border-[var(--color-highlight)]/10">
              <div className="w-14 h-14 rounded-full bg-[var(--accent-3)] border-2 border-[var(--border-highlight)] overflow-hidden flex-shrink-0">
                <Image
                  src="/home/pastors-image.png"
                  alt="Rev. Alvin Raj"
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
              <div>
                <p className="text-base font-bold text-[var(--foreground)]">
                  Rev. Alvin Raj
                </p>
                <p className="text-sm text-[var(--color-highlight)]">
                  Pastor-in-charge
                </p>
              </div>
            </div>
          </div>

          {/* Right — pastor photo (same frame + square aspect as home Greetings) */}
          <div className="order-1 lg:order-2">
            <div
              className="relative p-4 rounded-3xl border border-[var(--border-highlight)] backdrop-blur-md"
              style={{ background: "var(--card-shade)" }}
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-[var(--border-highlight)]">
                <Image
                  src="/home/pastors-image.png"
                  alt="Rev. Alvin Raj — Pastor-in-charge"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  unoptimized
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                <div
                  className="absolute bottom-0 left-0 right-0 p-6 border-t"
                  style={{
                    background: "rgba(211, 213, 215, 0.3)",
                    backdropFilter: "blur(12px)",
                    borderColor: "rgba(5, 5, 23, 0.1)",
                  }}
                >
                  <p className="text-white font-semibold">Rev. Alvin Raj</p>
                  <p className="text-white/70 text-sm">Pastor-in-charge</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGreetings;
