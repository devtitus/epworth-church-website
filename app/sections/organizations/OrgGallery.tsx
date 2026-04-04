interface OrgGalleryProps {
  label?: string;
  title: string;
}

const OrgGallery = ({
  label = "Our Galleries",
  title,
}: OrgGalleryProps) => {
  return (
    <section
      className="relative w-full bg-[var(--background)] py-20 lg:py-24"
      aria-labelledby="org-gallery-heading"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-12 lg:mb-16">
          <p className="text-sm font-normal text-[var(--color-secondary-text)] mb-2">
            {label}
          </p>
          <h2
            id="org-gallery-heading"
            className="text-2xl md:text-3xl font-bold text-[var(--foreground)]"
          >
            {title}
          </h2>
        </header>

        {/* Gallery Grid */}
        <div className="flex flex-col gap-6">
          {/* Top Row - 2 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-64 md:h-72">
            <div className="rounded-2xl border border-[var(--border-highlight)] bg-[var(--card-shade)]" />
            <div className="rounded-2xl border border-[var(--border-highlight)] bg-[var(--card-shade)]" />
          </div>

          {/* Bottom Row - 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-64 md:h-72">
            <div className="rounded-2xl border border-[var(--border-highlight)] bg-[var(--card-shade)]" />
            <div className="rounded-2xl border border-[var(--border-highlight)] bg-[var(--card-shade)]" />
            <div className="rounded-2xl border border-[var(--border-highlight)] bg-[var(--card-shade)]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrgGallery;
