export const ourStorySection = {
  ariaLabel: "Our Story - About Epworth Methodist Tamil Church",
  sectionLabel: "Our Story",
  title: {
    prefix: "A Legacy of",
    highlighted: "Faith",
  },
  image: {
    src: "/home/1.jpg",
    alt: "Epworth Methodist Tamil Church - Our heritage building",
  },
  aspectRatio: "1/1" as const,
  paragraphs: [
    "Founded in 1874, Epworth Methodist Tamil Church has been a beacon of hope and faith for over a century and a half. Our church traces its roots to the Methodist missionary movement, bringing the gospel of Jesus Christ to the Tamil community in Bengaluru.",
    "Today, we continue to honor our heritage while embracing contemporary ways to reach and serve our community. With 500+ members across all ages, we are united in our commitment to biblical truth, authentic worship, and compassionate service.",
    "Whether you are seeking a spiritual home, looking for fellowship, or exploring the Christian faith, we invite you to join us on this journey of faith!",
  ],
  stats: [
    { value: "150+", label: "Years" },
    { value: "500+", label: "Members" },
    { value: "5+", label: "Ministries" },
  ],
  showStats: true,
  showCta: true,
  cta: {
    label: "Learn More",
    href: "/about",
  },
  reverseOnMobile: false,
} as const;

export const aboutHistorySection = {
  ariaLabel: "Our History",
  sectionLabel: "History",
  title: {
    prefix: "Our",
    highlighted: "History",
  },
  image: {
    src: "",
    alt: "",
  },
  aspectRatio: "4/3" as const,
  paragraphs: [
    "Lorem ipsum dolor sit amet consectetur. Ullamcorper vestibulum adipiscing commodo condimentum auctor cras ut porttitor non. In nec neque iaculis malesuada.",
    "Imperdiet est facilisis fermentum dignissim vitae nisi consectetur. Accumsan semper volutpat blandit egestas. Neque curabitur et orci pellentesque ante nec facilisi.",
  ],
  stats: [],
  showStats: false,
  showCta: false,
  cta: {
    label: "",
    href: "",
  },
  reverseOnMobile: true,
} as const;