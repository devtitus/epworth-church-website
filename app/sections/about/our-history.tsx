const OurHistory = () => {
  return (
    <section
      className="relative w-full bg-[var(--background)] py-20 lg:py-24"
      aria-labelledby="our-history-heading"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative p-4 rounded-3xl border border-[var(--border-highlight)] backdrop-blur-md" style={{ background: "var(--card-shade)" }}>
              <div
                className="relative w-full aspect-[4/3] max-h-[min(52vh,520px)] rounded-2xl border border-[var(--border-highlight)] bg-[var(--media-placeholder)]"
                role="presentation"
                aria-hidden
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-block text-[var(--color-highlight)] text-sm font-semibold uppercase tracking-widest mb-4">
              History
            </span>
            <h2
              id="our-history-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--foreground)] leading-tight mb-8"
            >
              Our{" "}
              <span className="text-[var(--accent-2)]">History</span>
            </h2>

            <div className="space-y-4 text-base text-[var(--color-secondary-text)] leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet consectetur. Ullamcorper vestibulum
                adipiscing commodo condimentum auctor cras ut porttitor non. In
                nec neque iaculis malesuada.
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
    </section>
  );
};

export default OurHistory;
