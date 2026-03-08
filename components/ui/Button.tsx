"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export function Button({ children, className = "", variant = "primary", ...props }: ButtonProps) {
  const baseStyles = "group relative overflow-hidden h-12 px-8 rounded-full cursor-pointer transition-all duration-500 font-medium";
  
  const variants = {
    primary: "bg-[var(--color-secondary-background)] text-[var(--color-highlight)] border-1 border-[var(--color-highlight)] hover:bg-[var(--color-highlight)] hover:text-white",
    secondary: "bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white/20"
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
