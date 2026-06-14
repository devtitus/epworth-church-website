import HighlightedTitle from "./HighlightedTitle";

interface SectionHeaderProps {
  label: string;
  title: string;
  id: string;
  align?: "left" | "center";
  description?: string;
  className?: string;
  labelSpacing?: "sm" | "md";
}

const SectionHeader = ({
  label,
  title,
  id,
  align = "left",
  description,
  className = "mb-12 lg:mb-16",
  labelSpacing = "sm",
}: SectionHeaderProps) => {
  const isCentered = align === "center";
  const labelMargin = labelSpacing === "md" ? "mb-4" : "mb-3";

  return (
    <header className={`${className} ${isCentered ? "text-center" : ""}`}>
      <span className={`inline-block text-[var(--color-highlight)] text-sm font-semibold uppercase tracking-widest ${labelMargin}`}>
        {label}
      </span>
      <HighlightedTitle id={id} title={title} />
      {description && (
        <p className="text-base text-[var(--color-secondary-text)] leading-relaxed mb-8">
          {description}
        </p>
      )}
    </header>
  );
};

export default SectionHeader;
