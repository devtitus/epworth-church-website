interface PlaceholderCardProps {
  className?: string;
}

const PlaceholderCard = ({ className = "" }: PlaceholderCardProps) => {
  return (
    <div
      className={`rounded-2xl border border-[var(--border-highlight)] bg-[var(--card-shade)] ${className}`}
    />
  );
};

export default PlaceholderCard;
