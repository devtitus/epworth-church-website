import type { ReactNode } from "react";

interface SectionShellProps {
  id?: string;
  labelledBy: string;
  children: ReactNode;
  className?: string;
}

const SectionShell = ({ id, labelledBy, children, className = "" }: SectionShellProps) => {
  return (
    <section
      id={id}
      className={`relative w-full bg-[var(--background)] py-20 lg:py-24 ${className}`}
      aria-labelledby={labelledBy}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default SectionShell;
