import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { footerData } from "@/data/layout/footer";

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
};

const Footer = () => {
  return (
    <footer className="bg-[var(--background)] text-[var(--foreground)] py-8 border-t border-[var(--border)] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="flex items-start space-x-4 mb-4 md:mb-0">
            <Image
              src={footerData.logo.src}
              alt={footerData.logo.alt}
              width={footerData.logo.width}
              height={footerData.logo.height}
            />
            <div className="mt-4">
              <h3 className="text-[var(--accent-4)] font-bold">
                {footerData.churchName}
              </h3>
              <p className="text-[var(--color-secondary-text)] text-[15px]">
                {footerData.tagline}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
            {footerData.sections.map((section) => (
              <div key={section.title}>
                <h4 className="font-semibold text-[var(--accent-2)] text-[15px] mb-2">
                  {section.title}
                </h4>
                <ul className="space-y-1">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[var(--color-secondary-text)] text-[15px] hover:text-[var(--color-highlight)]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center">
          <div className="text-start text-[15px] text-[var(--accent-2)]">
            <p>
              &copy; {new Date().getFullYear()} {footerData.copyright.text}
            </p>
          </div>

          <div className="flex space-x-4 mt-4 md:mt-0">
            {footerData.socialLinks.map((social) => {
              const SocialIcon = iconMap[social.icon];
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-secondary-text)] hover:text-[var(--color-highlight)] transition-colors"
                  aria-label={social.name}
                >
                  {SocialIcon && <SocialIcon size={24} />}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;