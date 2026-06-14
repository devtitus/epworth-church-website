import SectionShell from "@/components/ui/SectionShell";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassMediaFrame from "@/components/ui/GlassMediaFrame";
import ActivitiesList, {
  type ActivityItem,
} from "@/components/ui/ActivitiesList";

interface OrgActivitiesProps {
  label?: string;
  title: string;
  description?: string;
  activities: ActivityItem[];
}

const OrgActivities = ({
  label = "Schedule",
  title,
  description,
  activities,
}: OrgActivitiesProps) => {
  return (
    <SectionShell id="org-activities-section" labelledBy="org-activities-heading">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="order-2 lg:order-1">
          <GlassMediaFrame alt="Activities illustration" />
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeader
            label={label}
            title={title}
            id="org-activities-heading"
            description={description}
            className=""
            labelSpacing="md"
          />
          <ActivitiesList activities={activities} />
        </div>
      </div>
    </SectionShell>
  );
};

export default OrgActivities;
