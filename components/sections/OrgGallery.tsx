import SectionShell from "@/components/ui/SectionShell";
import SectionHeader from "@/components/ui/SectionHeader";
import GalleryGrid from "@/components/ui/GalleryGrid";

interface OrgGalleryProps {
  label?: string;
  title: string;
}

const OrgGallery = ({ label = "Our Galleries", title }: OrgGalleryProps) => {
  return (
    <SectionShell id="org-gallery-section" labelledBy="org-gallery-heading">
      <SectionHeader
        label={label}
        title={title}
        id="org-gallery-heading"
        align="center"
      />
      <GalleryGrid />
    </SectionShell>
  );
};

export default OrgGallery;
