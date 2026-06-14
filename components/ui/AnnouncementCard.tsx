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
      {/* Priority Badge */}
      {isNew && (
        <div className="absolute top-4 right-4 z-10">
          <span
            className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${priorityStyles.badge}`}
          >
            NEW
          </span>
        </div>
      )}

      <div className="p-6 lg:p-8">
        {/* Header Row */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <h3 className="text-xl md:text-2xl font-bold text-[var(--foreground)] leading-tight flex-1">
            {announcement.title}
          </h3>
          <div className="flex flex-col items-start md:items-end gap-2 text-sm text-[var(--color-secondary-text)] mt-2 md:mt-0">
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
