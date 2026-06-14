export interface Announcement {
  id: string;
  title: string;
  date: string;
  content: string;
  priority: "new" | "important" | "normal";
  author: string;
  category?: string;
}

export const announcements: Announcement[] = [
  {
    id: "ann-001",
    title: "Sunday Service Schedule Update",
    date: "2024-01-15",
    content: "Due to maintenance work, Sunday service will start at 9:00 AM instead of 8:30 AM. Please plan accordingly.",
    priority: "important",
    author: "Church Administration",
    category: "Service Updates",
  },
  {
    id: "ann-002",
    title: "New Youth Ministry Program Launch",
    date: "2024-01-12",
    content: "We're excited to announce the launch of our new youth ministry program starting next month. Registration is now open.",
    priority: "new",
    author: "Youth Ministry Team",
    category: "Ministry Updates",
  },
  {
    id: "ann-003",
    title: "Community Prayer Meeting",
    date: "2024-01-10",
    content: "Join us for our monthly community prayer meeting this Friday at 7:00 PM in the main hall.",
    priority: "normal",
    author: "Prayer Ministry",
    category: "Events",
  },
  {
    id: "ann-004",
    title: "Church Picnic Rescheduled",
    date: "2024-01-08",
    content: "Due to weather concerns, our annual church picnic has been rescheduled to next Saturday. Same location.",
    priority: "important",
    author: "Events Committee",
    category: "Events",
  },
  {
    id: "ann-005",
    title: "Bible Study Group Formation",
    date: "2024-01-05",
    content: "We're forming new Bible study groups. If you're interested in joining, please contact the ministry office.",
    priority: "normal",
    author: "Bible Study Ministry",
    category: "Ministry Updates",
  },
  {
    id: "ann-006",
    title: "Welcome New Members",
    date: "2024-01-03",
    content: "We warmly welcome our new members who joined us last Sunday. May God bless your journey with us.",
    priority: "normal",
    author: "Membership Committee",
    category: "Community",
  },
  {
    id: "ann-007",
    title: "Charity Drive Results",
    date: "2024-01-01",
    content: "Thank you to everyone who participated in our recent charity drive. We collected enough to support 50 families.",
    priority: "normal",
    author: "Charity Ministry",
    category: "Community",
  },
  {
    id: "ann-008",
    title: "Technical Issues Resolved",
    date: "2023-12-28",
    content: "The sound system issues during last Sunday's service have been resolved. Thank you for your patience.",
    priority: "normal",
    author: "Technical Team",
    category: "Service Updates",
  },
];

// Sort announcements by date (newest first)
export const sortedAnnouncements = announcements.sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);
