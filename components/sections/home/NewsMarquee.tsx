import Link from "next/link";
import { Calendar } from "lucide-react";
import { sortedAnnouncements } from "@/lib/data/announcements";
import { sortedBlogs } from "@/lib/data/blogs";

interface CombinedItem {
  id: string;
  type: "Blog" | "Announcement";
  title: string;
  date: string;
  link: string;
  isImportant?: boolean;
}

export const NewsMarquee = () => {
  // 1. Combine Data
  const announcements: CombinedItem[] = sortedAnnouncements
    .slice(0, 4)
    .map((a) => ({
      id: a.id,
      type: "Announcement",
      title: a.title,
      date: a.date,
      link: "/announcements",
      isImportant: a.priority === "new" || a.priority === "important",
    }));

  const blogs: CombinedItem[] = sortedBlogs.slice(0, 4).map((b) => ({
    id: b.id,
    type: "Blog",
    title: b.title,
    date: b.date,
    link: `/blogs/${b.id}`,
    isImportant: false,
  }));

  // 2. Sort combined list
  const combinedList = [...announcements, ...blogs]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6);

  // Duplicate for smooth seamless loop
  const loopArray = [...combinedList, ...combinedList];

  return (
    <article
      className="relative rounded-3xl border border-[var(--border-highlight)] overflow-hidden h-[400px] flex flex-col"
      style={{
        background: "rgba(211, 213, 215, 0.15)",
        backdropFilter: "blur(20px)",
      }}
    >
      {/* Header */}
      <div
        className="absolute top-0 left-0 right-0 z-20 p-6 pb-4 border-b border-[var(--border-highlight)]"
        style={{
          background: "rgba(20, 20, 20, 0.4)",
          backdropFilter: "blur(10px)",
        }}
      >
        <h2 className="text-white text-xl font-bold flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[var(--color-highlight)] animate-pulse" />
          Latest Updates
        </h2>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative flex-1 overflow-hidden mt-20 group">
        {/* Fading Edges */}
        <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-[rgba(20,20,20,0.6)] to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[rgba(20,20,20,0.6)] to-transparent z-10 pointer-events-none" />

        <div
          className="flex flex-col gap-4 px-6 pt-4 pb-0 h-max group-hover:[animation-play-state:paused]"
          style={{ animation: "marqueeVertical 35s linear infinite" }}
        >
          {loopArray.map((item, index) => (
            <Link
              key={`${item.id}-${index}`}
              href={item.link}
              className="block group/card"
            >
              <div
                className="p-4 rounded-2xl border border-[var(--border-highlight)] transition-all duration-300 hover:border-[var(--color-highlight)] hover:bg-[rgba(211,213,215,0.1)]"
                style={{ background: "rgba(211, 213, 215, 0.05)" }}
              >
                <div className="flex justify-between items-start mb-2 gap-4">
                  <span
                    className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border ${item.type === "Announcement" ? "border-[var(--color-highlight)] text-[var(--color-highlight)]" : "border-[var(--accent-3)] text-[var(--accent-3)]"}`}
                  >
                    {item.type}
                  </span>
                  {item.isImportant && (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[var(--accent-4)] text-white">
                      Alert
                    </span>
                  )}
                </div>

                <h3 className="text-white text-base font-semibold mb-2 group-hover/card:text-[var(--color-highlight)] transition-colors line-clamp-2">
                  {item.title}
                </h3>

                <div className="flex items-center gap-2 text-white/50 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  <time dateTime={item.date}>
                    {new Date(item.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
};
