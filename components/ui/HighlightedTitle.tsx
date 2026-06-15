interface HighlightedTitleProps {
  id: string;
  title: string;
  className?: string;
}

const HighlightedTitle = ({ id, title, className = "" }: HighlightedTitleProps) => {
  const titleParts = title.trim().split(/\s+/);
  const lastWord = titleParts.pop() || "";
  const firstWords = titleParts.join(" ");

  return (
    <h2
      id={id}
      className={`font-bold text-[var(--foreground)] leading-tight ${className}`}
    >
      {firstWords && (
        <>
          {firstWords}{" "}
        </>
      )}
      <span className="text-[var(--accent-2)]">{lastWord}</span>
    </h2>
  );
};

export default HighlightedTitle;
