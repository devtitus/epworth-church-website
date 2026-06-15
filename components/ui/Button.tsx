"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export function Button({ children, className = "", variant = "primary", ...props }: ButtonProps) {
  const baseStyles = "group relative overflow-hidden h-12 px-8 rounded-full cursor-pointer transition-all duration-300 font-medium backdrop-blur-sm border inline-flex items-center justify-center gap-2 text-sm md:text-base";
  
  const variants = {
    primary: "bg-[var(--accent-5)]/40 border-[var(--accent-5)]/60 text-[var(--accent-1)] hover:bg-[var(--accent-5)]/60 hover:border-[var(--accent-5)]",
    secondary: "bg-[var(--accent-3)]/20 border-[var(--border-highlight)] text-[var(--foreground)] hover:bg-[var(--accent-3)]/40"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
