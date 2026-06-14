import type { Metadata } from "next";
import { sortedAnnouncements } from "@/data/announcements";
import { AnnList } from "@/components/sections/index";

export const metadata: Metadata = {
  title: "Announcements | Epworth Methodist Tamil Church",
  description:
    "Stay updated with the latest announcements from Epworth Methodist Tamil Church.",
};

export default function AnnouncementsPage() {
  return (
    <>
      <AnnList announcements={sortedAnnouncements} />
    </>
  );
}
