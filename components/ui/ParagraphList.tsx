interface ParagraphListProps {
  paragraphs: string[];
  className?: string;
}

const ParagraphList = ({ paragraphs, className = "" }: ParagraphListProps) => {
  return (
    <div
      className={`space-y-4 text-base text-[var(--color-secondary-text)] leading-relaxed ${className}`}
    >
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default ParagraphList;
