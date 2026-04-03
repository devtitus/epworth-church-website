import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { organizations } from "@/lib/data/organizations";
import OrgHero from "@/app/sections/organizations/OrgHero";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(organizations).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const org = organizations[slug];

  if (!org) {
    return { title: "Not Found" };
  }

  return {
    title: `${org.name} | Epworth Methodist Tamil Church`,
    description: org.description,
  };
}

export default async function OrganizationPage({ params }: PageProps) {
  const { slug } = await params;
  const org = organizations[slug];

  if (!org) {
    notFound();
  }

  return (
    <main>
      <OrgHero
        name={org.name}
        tagline={org.tagline}
        description={org.description}
        heroImage={org.heroImage}
      />

      {/*
        TODO: Wire up remaining sections as they are implemented.
        <OrgAbout ... />
        <OrgActivities ... />
        <OrgLeaders ... />
      */}
    </main>
  );
}
