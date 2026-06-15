import { Calendar, User, Tag } from "lucide-react";
import { Announcement } from "@/data/announcements";

interface AnnouncementCardProps {
  announcement: Announcement;
}

const getPriorityStyles = (priority: Announcement["priority"]) => {
  switch (priority) {
    case "new":
      return {
        badge: "bg-[var(--accent-5)] text-[var(--accent-1)]",
        border: "border-l-[var(--accent-5)]",
        dot: "bg-[var(--accent-5)]",
      };
    case "important":
      return {
        badge: "bg-[var(--color-highlight)] text-white",
        border: "border-l-[var(--color-highlight)]",
        dot: "bg-[var(--color-highlight)]",
      };
    default:
      return {
        badge: "bg-[var(--accent-3)] text-[var(--foreground)]",
        border: "border-l-[var(--accent-3)]",
        dot: "bg-[var(--accent-3)]",
      };
  }
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const AnnouncementCard = ({ announcement }: AnnouncementCardProps) => {
  const priorityStyles = getPriorityStyles(announcement.priority);
  const isNew = announcement.priority === "new";

  return (
    <article
      className={`relative rounded-2xl border border-[var(--border-highlight)] backdrop-blur-lg shadow-xs overflow-hidden transition-all duration-300 hover:shadow-lg ${priorityStyles.border} border-l-4`}
      style={{ background: "var(--card-shade)" }}
    >
      <div className="p-5 sm:p-6 lg:p-8">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-4 mb-4">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--foreground)] leading-tight">
            {announcement.title}
            {isNew && (
              <span
                className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider ml-2.5 align-middle ${priorityStyles.badge}`}
              >
                NEW
              </span>
            )}
          </h3>
          <div className="flex flex-row flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-[var(--color-secondary-text)] md:flex-col md:items-end mt-1 md:mt-0">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime={announcement.date}>
                {formatDate(announcement.date)}
              </time>
            </div>
            {announcement.category && (
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4" />
                <span>{announcement.category}</span>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <p className="text-base text-[var(--color-secondary-text)] leading-relaxed mb-6">
          {announcement.content}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-highlight)]/10">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-[var(--color-highlight)]" />
            <span className="text-sm text-[var(--color-secondary-text)]">
              {announcement.author}
            </span>
          </div>

          {/* Priority Indicator */}
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${priorityStyles.dot}`} />
            <span className="text-xs text-[var(--color-secondary-text)] capitalize">
              {announcement.priority}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default AnnouncementCard;
