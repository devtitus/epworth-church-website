import type { Metadata } from "next";
import Link from "next/link";
import { organizationList, organizationsPageData } from "@/data/organizations";

export const metadata: Metadata = {
  title: organizationsPageData.metaTitle,
  description: organizationsPageData.metaDescription,
};

export default function OrganizationsPage() {
  return (
    <main className="w-full py-12 md:py-20 lg:py-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-bold text-[var(--foreground)] leading-tight mb-4">
          {organizationsPageData.titlePrefix}{" "}
          <span className="text-[var(--accent-2)]">
            {organizationsPageData.titleHighlighted}
          </span>
        </h1>
        <p className="text-[var(--color-secondary-text)] text-base md:text-lg mb-8 md:mb-12 max-w-2xl">
          {organizationsPageData.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {organizationList.map((org) => {
            return (
              <Link
                key={org.slug}
                href={`/organizations/${org.slug}`}
                className="rounded-2xl border border-[var(--border-highlight)] p-6 hover:shadow-md transition-shadow"
                style={{ background: "var(--card-shade)" }}
              >
                <h2 className="font-bold text-[var(--foreground)] mb-2">
                  {org.name}
                </h2>
                <p className="text-[var(--color-secondary-text)] text-sm">
                  {org.tagline}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
