import { sortedAnnouncements } from "@/data/announcements";
import { sortedBlogs } from "@/data/blogs";

export interface CombinedItem {
  id: string;
  type: "Blog" | "Announcement";
  title: string;
  date: string;
  link: string;
  isImportant?: boolean;
}

export const newsMarqueeConfig = {
  headerTitle: "Latest Updates",
  announcementLimit: 4,
  blogLimit: 4,
  totalLimit: 6,
  animationDuration: 35,
} as const;

export function getNewsMarqueeItems(): CombinedItem[] {
  const announcements: CombinedItem[] = sortedAnnouncements
    .slice(0, newsMarqueeConfig.announcementLimit)
    .map((a) => ({
      id: a.id,
      type: "Announcement",
      title: a.title,
      date: a.date,
      link: "/announcements",
      isImportant: a.priority === "new" || a.priority === "important",
    }));

  const blogs: CombinedItem[] = sortedBlogs
    .slice(0, newsMarqueeConfig.blogLimit)
    .map((b) => ({
      id: b.id,
      type: "Blog",
      title: b.title,
      date: b.date,
      link: `/blogs/${b.id}`,
      isImportant: false,
    }));

  return [...announcements, ...blogs]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, newsMarqueeConfig.totalLimit);
}