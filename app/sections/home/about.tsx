import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const About = () => {
  return (
    <section
      className="relative w-full py-20 lg:py-24 bg-[var(--background)]"
      aria-labelledby="about-heading"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left Column - Church Image with Glass Effect Card */}
          <div className="order-1 lg:order-1">
            <div className="relative p-4 rounded-3xl border border-[var(--border-highlight)] backdrop-blur-lg" style={{ background: 'var(--card-shade)' }}>

              {/* Image Container */}
              <div className="relative aspect-[1/1] rounded-2xl overflow-hidden border border-[var(--border-highlight)]">
                <Image
                  src="/home/1.jpg"
                  alt="Epworth Methodist Tamil Church - Our heritage building"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Stats overlay */}
                <div 
                  className="absolute bottom-0 left-0 right-0 p-5 border-t"
                  style={{ background: 'rgba(211, 213, 215, 0.3)', backdropFilter: 'blur(12px)', borderColor: 'rgba(5, 5, 23, 0.1)' }}
                >
                  <div className="flex justify-center gap-6">
                    <div className="text-center">
                      <p className="text-xl font-bold text-white">150+</p>
                      <p className="text-xs text-white/70">Years</p>
                    </div>
                    <div className="w-px h-8 bg-white/20" />
                    <div className="text-center">
                      <p className="text-xl font-bold text-white">500+</p>
                      <p className="text-xs text-white/70">Members</p>
                    </div>
                    <div className="w-px h-8 bg-white/20" />
                    <div className="text-center">
                      <p className="text-xl font-bold text-white">5+</p>
                      <p className="text-xs text-white/70">Ministries</p>
                    </div>
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
                Our Story
              </span>

              {/* Title */}
              <h2
                id="about-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--foreground)] leading-tight mb-6"
              >
                A Legacy of{" "}
                <span className="text-[var(--accent-2)]">Faith</span>
              </h2>
            </header>

            {/* About Message */}
            <div className="mb-8">
              <p className="text-base text-[var(--color-secondary-text)] leading-relaxed mb-4">
                Founded in 1874, Epworth Methodist Tamil Church has been a
                beacon of hope and faith for over a century and a half. Our
                church traces its roots to the Methodist missionary movement,
                bringing the gospel of Jesus Christ to the Tamil community in
                Bengaluru.
              </p>
              <p className="text-base text-[var(--color-secondary-text)] leading-relaxed mb-4">
                Today, we continue to honor our heritage while embracing
                contemporary ways to reach and serve our community. With 500+
                members across all ages, we are united in our commitment to
                biblical truth, authentic worship, and compassionate service.
              </p>
              <p className="text-base text-[var(--color-secondary-text)] leading-relaxed">
                Whether you are seeking a spiritual home, looking for
                fellowship, or exploring the Christian faith, we invite you to
                join us on this journey of faith!
              </p>
            </div>

            {/* CTA Button */}
            <Link href="/about">
              <Button variant="primary" className="text-base font-medium">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
