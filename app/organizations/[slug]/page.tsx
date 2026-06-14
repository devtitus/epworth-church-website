import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { organizations, organizationsContactData } from "@/data/organizations";
import OrgHero from "@/components/sections/OrgHero";
import OrgAbout from "@/components/sections/OrgAbout";
import OrgActivities from "@/components/sections/OrgActivities";
import OrgNote from "@/components/sections/OrgNote";
import OrgActivitiesGrid from "@/components/sections/OrgActivitiesGrid";
import OrgGallery from "@/components/sections/OrgGallery";
import { Contact } from "@/components/layout/index";

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
      <OrgHero slug={slug} />

      <OrgAbout title={org.aboutTitle} content={org.aboutContent} />

      <OrgActivities
        label="Schedule"
        title={org.activitiesTitle}
        activities={org.activities}
      />

      <OrgNote
        title={org.noteTitle}
        content={org.noteContent}
        authorName={org.noteAuthor}
      />

      <OrgActivitiesGrid title={org.activitiesGridTitle} />

      <OrgGallery title={org.galleryTitle} />

      <Contact
        tagline={organizationsContactData.tagline}
        title={organizationsContactData.title}
        description={organizationsContactData.description}
        buttonText={organizationsContactData.buttonText}
        buttonHref={organizationsContactData.buttonHref}
      />
    </main>
  );
}
