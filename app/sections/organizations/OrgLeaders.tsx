interface OrgNoteProps {
  label?: string;
  title: string;
  content: string[];
  authorName: string;
}

const OrgNote = ({
  label = "Note",
  title,
  content,
  authorName,
}: OrgNoteProps) => {
  return (
    <section
      className="relative w-full bg-[var(--background)] py-20 lg:py-24"
      aria-labelledby="org-note-heading"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Note Content */}
          <div>
            <span className="inline-block text-[var(--color-highlight)] text-sm font-semibold uppercase tracking-widest mb-4">
              {label}
            </span>

            <h2
              id="org-note-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--foreground)] leading-tight mb-6"
            >
              {title}
            </h2>

            <div className="space-y-4 text-base text-[var(--color-secondary-text)] leading-relaxed mb-8">
              {content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div>
              <p className="text-base text-[var(--color-secondary-text)] mb-1">
                By
              </p>
              <p className="text-lg font-bold text-[var(--foreground)]">
                {authorName}
              </p>
            </div>
          </div>

          {/* Right Column - Image Placeholder */}
          <div className="w-full aspect-[4/3] rounded-2xl border border-[var(--border-highlight)] bg-[var(--card-shade)]" />
        </div>
      </div>
    </section>
  );
};

export default OrgNote;
