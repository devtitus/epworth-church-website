import SectionShell from "@/components/ui/SectionShell";
import SectionHeader from "@/components/ui/SectionHeader";
import BentoGrid from "@/components/ui/BentoGrid";

interface OrgActivitiesGridProps {
  label?: string;
  title: string;
}

const OrgActivitiesGrid = ({
  label = "Our Activities",
  title,
}: OrgActivitiesGridProps) => {
  return (
    <SectionShell id="org-activities-grid-section" labelledBy="org-activities-grid-heading">
      <SectionHeader
        label={label}
        title={title}
        id="org-activities-grid-heading"
        align="center"
      />
      <BentoGrid />
    </SectionShell>
  );
};

export default OrgActivitiesGrid;
