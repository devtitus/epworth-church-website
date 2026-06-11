"use client";

import { MapPin, Clock, Calendar } from "lucide-react";

const FindUs = () => {
  return (
    <section
      className="relative w-full py-16 lg:py-24 bg-[var(--background)]"
      aria-labelledby="find-us-heading"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Content */}
          <div className="order-1 lg:order-1">
            <header className="mb-6">
              {/* Section Label */}
              <span className="inline-block text-[var(--color-highlight)] text-sm font-semibold uppercase tracking-widest mb-3">
                Visit Us
              </span>

              {/* Title */}
              <h2
                id="find-us-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--foreground)] leading-tight mb-2"
              >
                Find <span className="text-[var(--accent-2)]">Us</span>
              </h2>

              <p className="text-[var(--color-secondary-text)] text-base">
                Join us for worship and experience the warmth of our community
              </p>
            </header>

            {/* Main Address Card with Glassmorphism */}
            <div
              className="mb-6 rounded-2xl border border-[var(--border-highlight)] backdrop-blur-lg shadow-xs"
              style={{
                background:
                  "linear-gradient(0deg, rgba(126, 106, 82, 0.3) 0%, rgba(218, 206, 182, 0.1) 60%)",
              }}
            >
              {/* Inner card with glass effect */}
              <div className="p-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-highlight)] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[var(--foreground)] font-bold text-lg mb-1">
                      Epworth Methodist Tamil Church
                    </h3>
                    <p className="text-[var(--color-secondary-text)] text-sm">
                      No. 25, Museum Road
                      <br />
                      Bengaluru, Karnataka 560001
                    </p>
                    <div className="mt-2 text-[var(--color-highlight)] text-sm font-medium">
                      India
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Cards - In a row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Sunday Service Card with Glassmorphism */}
              <div
                className="rounded-2xl border border-[var(--border-highlight)] backdrop-blur-lg shadow-xs"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(126, 106, 82, 0.3) 0%, rgba(218, 206, 182, 0.1) 60%)",
                }}
              >
                {/* Inner card with glass effect */}
                <div className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[var(--color-highlight)]/10 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-4 h-4 text-[var(--color-highlight)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[var(--foreground)] font-semibold text-sm mb-1">
                        Sunday Service
                      </h3>
                      <div className="text-[var(--color-secondary-text)] text-sm">
                        <span className="font-medium text-[var(--foreground)]">
                          8:30 AM
                        </span>
                        {" - "}
                        <span className="text-[var(--foreground)]">
                          10:00 AM
                        </span>
                      </div>
                      <div className="text-xs text-[var(--color-secondary-text)] mt-1">
                        Every Sunday
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dawn Service Card with Glassmorphism */}
              <div
                className="rounded-2xl border border-[var(--border-highlight)] backdrop-blur-lg shadow-xs"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(126, 106, 82, 0.3) 0%, rgba(218, 206, 182, 0.1) 60%)",
                }}
              >
                {/* Inner card with glass effect */}
                <div className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[var(--accent-2)] flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-[var(--color-highlight)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[var(--foreground)] font-semibold text-sm mb-1">
                        Dawn Service
                      </h3>
                      <div className="text-[var(--color-secondary-text)] text-sm">
                        <span className="font-medium text-[var(--foreground)]">
                          1st of Every Month
                        </span>
                      </div>
                      <div className="text-[var(--color-secondary-text)] text-sm">
                        <span className="font-medium text-[var(--foreground)]">
                          5:30 AM Onwards
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="order-2 lg:order-2 space-y-6">
            {/* Map with Glassmorphism Frame */}
            <div
              className="rounded-2xl p-4 border border-[var(--border-highlight)] backdrop-blur-lg shadow-xs"
              style={{ background: "var(--card-shade)" }}
            >
              {/* Inner card with glass effect */}
              <div className="rounded-2xl border border-[var(--border-highlight)] overflow-hidden">
                <div className="h-[300px] lg:h-[400px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.541663048926!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0x8c4b8e9e9e9e9e9e!2sBangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Church Location Map"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Get Directions Card with Glassmorphism */}
            <div
              className="rounded-2xl border border-[var(--border-highlight)] backdrop-blur-lg shadow-xs"
              style={{
                background:
                  "linear-gradient(0deg, rgba(126, 106, 82, 0.3) 0%, rgba(218, 206, 182, 0.1) 60%)",
              }}
            >
              {/* Inner card with glass effect */}
              <div className="p-4 ">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-[var(--foreground)] font-semibold">
                      Get Directions
                    </h4>
                    <p className="text-[var(--color-secondary-text)] text-sm">
                      Navigate to our church
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[var(--color-highlight)] flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindUs;
