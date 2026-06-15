"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Dropdown } from "@/components/ui/Dropdown";
import { navbarData } from "@/data/layout/navbar";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="sticky top-0 z-50 bg-[var(--background)] shadow-xs border-b border-[var(--border)] flex-shrink-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="shrink-0 flex items-center">
              <Link href="/">
                <Image
                  src={navbarData.logo.src}
                  alt={navbarData.logo.alt}
                  width={navbarData.logo.width}
                  height={navbarData.logo.height}
                />
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navbarData.navLinks.map((link) =>
                link.type === "dropdown" ? (
                  <Dropdown key={link.label} trigger={link.label} items={[...link.items]} />
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`px-4 py-2 rounded-full text-base font-normal transition-colors ${
                      isActive(link.href)
                        ? "text-[var(--accent-1)] bg-[var(--accent-5)]/70"
                        : "text-[var(--foreground)] hover:bg-[var(--accent-5)]/70 hover:text-[var(--accent-1)]"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[var(--foreground)] hover:text-[var(--foreground)] hover:bg-[var(--accent-3)] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--border)]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[var(--border)]">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-[var(--accent-3)]">
            {navbarData.navLinks.map((link) =>
              link.type === "dropdown" ? (
                <div key={link.label}>
                  <div className="pt-2 pb-1">
                    <span className="block px-3 py-2 text-base font-semibold text-[var(--foreground)]">
                      {link.label}
                    </span>
                  </div>
                  {link.items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-6 py-2 text-base font-medium text-[var(--foreground)] hover:bg-[var(--accent-5)]/70 hover:text-[var(--accent-1)]"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-[var(--color-highlight)] bg-[var(--accent-5)]"
                      : "text-[var(--foreground)] hover:bg-[var(--accent-5)]/70 hover:text-[var(--accent-1)]"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;