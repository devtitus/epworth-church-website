interface GlassMediaFrameProps {
  aspectRatio?: string;
  className?: string;
  alt?: string;
}

const GlassMediaFrame = ({
  aspectRatio = "aspect-[4/3]",
  className = "",
  alt = "Section illustration",
}: GlassMediaFrameProps) => {
  return (
    <div
      className={`relative p-4 rounded-3xl border border-[var(--border-highlight)] backdrop-blur-md ${className}`}
      style={{ background: "var(--card-shade)" }}
    >
      <div
        className={`relative w-full ${aspectRatio} rounded-2xl border border-[var(--border-highlight)] bg-[var(--media-placeholder)] overflow-hidden`}
        role="img"
        aria-label={alt}
      />
    </div>
  );
};

export default GlassMediaFrame;
