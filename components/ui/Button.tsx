"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export function Button({ children, className = "", variant = "primary", ...props }: ButtonProps) {
  const baseStyles = "group relative overflow-hidden h-12 px-8 rounded-xl cursor-pointer transition-all duration-300 font-medium";
  
  const variants = {
    primary: "bg-[var(--color-highlight)] text-white border border-[var(--color-highlight)] hover:bg-transparent hover:text-[var(--color-highlight)]",
    secondary: "bg-[var(--accent-3)]/30 backdrop-blur-sm text-[var(--foreground)] border border-[var(--border-highlight)] hover:bg-[var(--accent-2)] hover:text-[var(--foreground)]"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}
