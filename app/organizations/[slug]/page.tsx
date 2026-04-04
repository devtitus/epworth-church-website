import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { organizations } from "@/lib/data/organizations";
import OrgHero from "@/app/sections/organizations/OrgHero";
import OrgAbout from "@/app/sections/organizations/OrgAbout";
import OrgActivities from "@/app/sections/organizations/OrgActivities";
import OrgNote from "@/app/sections/organizations/OrgLeaders";
import OrgActivitiesGrid from "@/app/sections/organizations/OrgActivitiesGrid";
import OrgGallery from "@/app/sections/organizations/OrgGallery";
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
      <OrgHero
        name={org.name}
        tagline={org.tagline}
        description={org.description}
        heroImage={org.heroImage}
      />

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
        tagline="Stay Connected"
        title="Join Our Community"
        description="We'd love to have you be a part of our organization. Reach out to learn more about how you can get involved."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </main>
  );
}
