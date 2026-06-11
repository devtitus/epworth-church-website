interface OrgAboutProps {
  title: string;
  content: string[];
}

const OrgAbout = ({ title, content }: OrgAboutProps) => {
  const titleParts = title.split(" ");
  const lastWord = titleParts.pop() || "";
  const firstWords = titleParts.join(" ");

  return (
    <section
      className="relative w-full bg-[var(--background)] py-20 lg:py-24"
      aria-labelledby="org-about-heading"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-block text-[var(--color-highlight)] text-sm font-semibold uppercase tracking-widest mb-4">
              About Us
            </span>

            <h2
              id="org-about-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--foreground)] leading-tight mb-6"
            >
              {firstWords}{" "}
              <span className="text-[var(--accent-2)]">{lastWord}</span>
            </h2>

            <div className="space-y-4 text-base text-[var(--color-secondary-text)] leading-relaxed mb-8">
              {content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Right Column - Image Placeholder with Glassmorphism Frame */}
          <div className="order-1 lg:order-2">
            <div
              className="relative p-4 rounded-3xl border border-[var(--border-highlight)] backdrop-blur-md"
              style={{ background: "var(--card-shade)" }}
            >
              <div className="relative aspect-[4/3] rounded-2xl border border-[var(--border-highlight)] bg-[var(--media-placeholder)] overflow-hidden" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrgAbout;
