export const footerData = {
  logo: {
    src: "/logo/footer_logo.svg",
    alt: "Epworth Church Footer Logo",
    width: 66,
    height: 120,
  },
  churchName: "Epworth Methodist Tamil Church",
  tagline: "A place of worship and community",
  sections: [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Events", href: "/events" },
        { label: "Announcements", href: "/announcements" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Organizations",
      links: [
        { label: "Sunday School", href: "/sermons" },
        { label: "EMTeens", href: "/sermons" },
        { label: "MYF", href: "/sermons" },
        { label: "WSCS", href: "/sermons" },
        { label: "Methodist Men", href: "/sermons" },
      ],
    },
    {
      title: "From the Church",
      links: [
        { label: "Blogs", href: "/events" },
        { label: "Announcements", href: "/events" },
      ],
    },
  ],
  socialLinks: [
    { name: "Facebook", icon: "Facebook", href: "https://facebook.com" },
    { name: "Instagram", icon: "Instagram", href: "https://instagram.com" },
    { name: "YouTube", icon: "Youtube", href: "https://youtube.com" },
    { name: "Twitter", icon: "Twitter", href: "https://twitter.com" },
  ],
  copyright: {
    text: "Epworth Methodist Tamil Church. All rights reserved.",
  },
} as const;