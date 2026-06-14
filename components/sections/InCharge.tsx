import { inChargeSection } from "@/data/inChargeSection";

const InCharge = () => {
  const { sectionLabel, title, leaders } = inChargeSection;

  return (
    <section
      className="relative w-full bg-[var(--background)] py-20 lg:py-24"
      aria-labelledby="in-charge-heading"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span className="inline-block text-[var(--color-highlight)] text-sm font-semibold uppercase tracking-widest mb-3">
            {sectionLabel}
          </span>
          <h2
            id="in-charge-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--foreground)] leading-tight"
          >
            {title.prefix}
            <span className="text-[var(--accent-2)]">{title.highlighted}</span>
          </h2>
        </header>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 list-none p-0 m-0">
          {leaders.map((person) => (
            <li key={person.title}>
              <article className="flex flex-col h-full min-h-[400px] rounded-2xl border border-[var(--border-highlight)] backdrop-blur-lg shadow-xs overflow-hidden">
                <div
                  className="flex-[7] min-h-[220px] sm:min-h-[260px] bg-[var(--media-placeholder-strong)]"
                  role="presentation"
                  aria-hidden
                />
                <div className="flex-[3] flex flex-col justify-center px-5 py-6 bg-[var(--card-shade)] border-t border-[var(--border-highlight)] text-center">
                  <h3 className="text-lg md:text-xl font-bold text-[var(--foreground)] mb-1">
                    {person.name}
                  </h3>
                  <p className="text-sm text-[var(--color-secondary-text)]">
                    {person.title}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default InCharge;