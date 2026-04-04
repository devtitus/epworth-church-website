interface OrgAboutProps {
  title: string;
  content: string[];
}

const OrgAbout = ({ title, content }: OrgAboutProps) => {
  return (
    <section
      className="relative w-full bg-[var(--background)] py-20 lg:py-24"
      aria-labelledby="org-about-heading"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Title */}
          <div>
            <h2
              id="org-about-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--foreground)] leading-tight"
            >
              {title}
            </h2>
          </div>

          {/* Right Column - Content + Placeholder */}
          <div className="flex flex-col gap-6">
            <div className="space-y-4 text-base text-[var(--color-secondary-text)] leading-relaxed">
              {content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Placeholder for future image/video embed */}
            <div className="w-full h-32 rounded-2xl border border-[var(--border-highlight)] bg-[var(--card-shade)]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrgAbout;
