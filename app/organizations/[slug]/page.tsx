import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { organizations } from "@/lib/data/organizations";
import OrgHero from "@/app/sections/organizations/OrgHero";
import OrgAbout from "@/app/sections/organizations/OrgAbout";
import OrgActivities from "@/app/sections/organizations/OrgActivities";
import OrgNote from "@/app/sections/organizations/OrgLeaders";

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

      <OrgAbout title={org.aboutTitle} content={org.aboutContent} />

      <OrgActivities title={org.activitiesTitle} activities={org.activities} />

      <OrgNote
        title={org.noteTitle}
        content={org.noteContent}
        authorName={org.noteAuthor}
      />
    </main>
  );
}
