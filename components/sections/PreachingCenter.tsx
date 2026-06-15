import { preachingCenterSection } from "@/data/preachingCenterSection";

const PreachingCenter = () => {
  const { sectionLabel, title, description, service, address, map } =
    preachingCenterSection;

  return (
    <section
      className="relative w-full bg-[var(--background)] py-[clamp(4rem,8vw,6rem)]"
      aria-labelledby="preaching-center-heading"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-stretch">
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <span className="inline-block text-[var(--color-highlight)] text-sm font-semibold uppercase tracking-widest mb-4">
              {sectionLabel}
            </span>

            <h2
              id="preaching-center-heading"
              className="text-[clamp(2rem,4vw+1rem,3rem)] font-bold text-[var(--foreground)] leading-tight mb-6"
            >
              {title.prefix}{" "}
              <span className="text-[var(--accent-2)]">
                {title.highlighted}
              </span>
            </h2>

            <p className="text-base text-[var(--color-secondary-text)] leading-relaxed mb-10 max-w-xl">
              {description}
            </p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">
                {service.label}
              </h3>
              <ul className="space-y-3 text-base text-[var(--color-secondary-text)] leading-relaxed list-none">
                {service.details.map((detail, index) => (
                  <li key={index}>
                    <span className="font-semibold text-[var(--foreground)]">
                      {detail.label} :
                    </span>{" "}
                    {detail.value}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-base text-[var(--color-secondary-text)] leading-relaxed max-w-xl">
              <span className="font-semibold text-[var(--foreground)]">
                Address :
              </span>{" "}
              {address}
            </p>
          </div>

          <div className="flex items-center justify-center order-1 lg:order-2">
            <div
              className="relative w-full aspect-square lg:aspect-[4/3] rounded-2xl border border-[var(--border-highlight)] backdrop-blur-lg shadow-xs flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(0deg, rgba(126, 106, 82, 0.3) 0%, rgba(218, 206, 182, 0.1) 60%)",
              }}
              role="img"
              aria-label={map.ariaLabel}
            >
              <span className="text-base font-medium text-[var(--color-secondary-text)]">
                {map.placeholderText}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreachingCenter;