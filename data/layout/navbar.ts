export const navbarData = {
  logo: {
    src: "/logo/Epworth_logo.svg",
    alt: "Epworth Logo",
    width: 190,
    height: 48,
  },
  navLinks: [
    { label: "Home", href: "/", type: "link" as const },
    { label: "About", href: "/about", type: "link" as const },
    {
      label: "Organizations",
      type: "dropdown" as const,
      items: [
        { name: "Sunday School", href: "/organizations/sunday-school" },
        { name: "EMTeens", href: "/organizations/emteens" },
        { name: "MYF", href: "/organizations/myf" },
        { name: "WSCS", href: "/organizations/wscs" },
        { name: "Methodist Men", href: "/organizations/methodist-men" },
      ],
    },
    {
      label: "From the Church",
      type: "dropdown" as const,
      items: [
        { name: "Blogs", href: "/blogs" },
        { name: "Announcements", href: "/announcements" },
      ],
    },
    { label: "Contact", href: "/contact", type: "link" as const },
  ],
} as const;