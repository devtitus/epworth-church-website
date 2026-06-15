export interface ActivityItem {
  title: string;
  description: string;
}

interface ActivitiesListProps {
  activities: ActivityItem[];
  heading?: string;
}

const ActivitiesList = ({
  activities,
  heading = "Regular Service",
}: ActivitiesListProps) => {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-[var(--foreground)] mb-4">
        {heading}
      </h3>
      <ul className="space-y-3 text-base text-[var(--color-secondary-text)] leading-relaxed list-none">
        {activities.map((item, index) => (
          <li key={index}>
            <span className="font-semibold text-[var(--foreground)]">
              {item.title}:
            </span>{" "}
            {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivitiesList;
