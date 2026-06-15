"use client";

import { MapPin, Clock, Calendar } from "lucide-react";
import { findUsSection } from "@/data/findUsSection";

const FindUs = () => {
  const { sectionLabel, title, description, address, services, map, directions } =
    findUsSection;

  return (
    <section
      className="relative w-full py-[clamp(4rem,6vw,6rem)] bg-[var(--background)]"
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
                {sectionLabel}
              </span>

              {/* Title */}
              <h2
                id="find-us-heading"
                className="font-bold text-[var(--foreground)] leading-tight mb-2"
              >
                {title.prefix} <span className="text-[var(--accent-2)]">{title.highlighted}</span>
              </h2>

              <p className="text-[var(--color-secondary-text)] text-base">
                {description}
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
              <div className="p-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-highlight)] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[var(--foreground)] font-bold mb-1">
                      {address.name}
                    </h3>
                    <p className="text-[var(--color-secondary-text)] text-sm">
                      {address.street}
                      <br />
                      {address.cityState}
                    </p>
                    <div className="mt-2 text-[var(--color-highlight)] text-sm font-medium">
                      {address.country}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Cards - In a row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service) => {
                const IconComponent =
                  service.icon === "Calendar" ? Calendar : Clock;

                return (
                  <div
                    key={service.id}
                    className="rounded-2xl border border-[var(--border-highlight)] backdrop-blur-lg shadow-xs"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(126, 106, 82, 0.3) 0%, rgba(218, 206, 182, 0.1) 60%)",
                    }}
                  >
                    <div className="p-4">
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            service.id === "sunday"
                              ? "bg-[var(--color-highlight)]/10"
                              : "bg-[var(--accent-2)]"
                          }`}
                        >
                          <IconComponent
                            className={`w-4 h-4 ${
                              service.id === "sunday"
                                ? "text-[var(--color-highlight)]"
                                : "text-[var(--color-highlight)]"
                            }`}
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-[var(--foreground)] font-semibold text-sm mb-1">
                            {service.title}
                          </h3>
                          {"timeRange" in service ? (
                            <>
                              <div className="text-[var(--color-secondary-text)] text-sm">
                                <span className="font-medium text-[var(--foreground)]">
                                  {service.timeRange.start}
                                </span>
                                {" - "}
                                <span className="text-[var(--foreground)]">
                                  {service.timeRange.end}
                                </span>
                              </div>
                              <div className="text-xs text-[var(--color-secondary-text)] mt-1">
                                {service.frequency}
                              </div>
                            </>
                          ) : (
                            <>
                              {service.details.map((detail, idx) => (
                                <div
                                  key={idx}
                                  className="text-[var(--color-secondary-text)] text-sm"
                                >
                                  <span className="font-medium text-[var(--foreground)]">
                                    {detail}
                                  </span>
                                </div>
                              ))}
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="order-2 lg:order-2 space-y-6">
            {/* Map with Glassmorphism Frame */}
            <div
              className="rounded-2xl p-4 border border-[var(--border-highlight)] backdrop-blur-lg shadow-xs"
              style={{ background: "var(--card-shade)" }}
            >
              <div className="rounded-2xl border border-[var(--border-highlight)] overflow-hidden">
                <div className="w-full aspect-video">
                  <iframe
                    src={map.iframeSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={map.title}
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
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-[var(--foreground)] font-semibold">
                      {directions.heading}
                    </h4>
                    <p className="text-[var(--color-secondary-text)] text-sm">
                      {directions.description}
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