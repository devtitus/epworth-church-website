import type { Metadata } from "next";
import { sortedAnnouncements } from "@/lib/data/announcements";
import AnnList from "@/components/sections/announcements/AnnList";

export const metadata: Metadata = {
  title: "Announcements | Epworth Methodist Tamil Church",
  description:
    "Stay updated with the latest announcements from Epworth Methodist Tamil Church.",
};

export default function AnnouncementsPage() {
  return (
    <main>
      <AnnList announcements={sortedAnnouncements} />
    </main>
  );
}
