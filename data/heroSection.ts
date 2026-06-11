export const heroSection = {
  ariaLabel: "Welcome to Epworth Methodist Tamil Church",
  image: {
    src: "/home/1.jpg",
    alt: "Epworth Methodist Tamil Church - Our church building and congregation",
  },
  badge: {
    text: "Est. 1874 • A Heritage of Faith",
  },
  title: {
    prefix: "Epworth Methodist",
    highlighted: "Tamil ",
    suffix: "Church",
  },
  description:
    "Find your place in our story. At Epworth MTC, faith, community, and hope converge. We are a vibrant family dedicated to following Christ and serving our city with love. We invite you to join our Sunday worship and discover a community where you are known, loved, and encouraged to grow. You aren’t just a visitor here—you’re family.",
} as const;

export const aboutHeroSection = {
  ariaLabel: "About Epworth Methodist Tamil Church",
  title: {
    prefix: "About",
    highlighted: "us",
  },
  image: {
    src: "/about/hero.jpg",
    alt: "Featured photograph for the About Us page",
  },
  subtitle: {
    prefix: "Our",
    highlighted: "Beginning",
  },
  paragraphs: [
    "Lorem ipsum dolor sit amet consectetur. Ullamcorper vestibulum adipiscing commodo condimentum auctor cras ut porttitor non. In nec neque iaculis malesuada.",
    "Imperdiet est facilisis fermentum dignissim vitae nisi consectetur. Accumsan semper volutpat blandit egestas. Neque curabitur et orci pellentesque ante nec facilisi.",
  ],
} as const;

export const organizationHeroSection = {
  ariaLabel: "Organization details for Epworth Methodist Tamil Church",
  taglineFallback: "Organization",
  cta: {
    label: "Know More",
    href: "#org-about",
  },
  image: {
    altSuffix: "Organization hero image",
  },
} as const;

interface OrganizationHeroData {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
}

export const organizationHeroSections: Record<string, OrganizationHeroData> = {
  "sunday-school": {
    slug: "sunday-school",
    name: "Sunday School",
    tagline: "Nurturing young hearts for Jesus",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ullamcorper vestibulum adipiscing commodo condimentum auctor cras ut porttitor non. In nec neque iaculis malesuada. Imperdiet est facilisis fermentum dignissim vitae nisi consectetur. Accumsan semper volutpat blandit egestas. Neque curabitur et orci pellentesque ante nec facilisi.",
    heroImage: "/organizations/sunday-school/hero.jpg",
  },
  emteens: {
    slug: "emteens",
    name: "EMTeens",
    tagline: "Growing in faith together",
    description: "A community for teenagers to grow in their walk with Christ",
    heroImage: "/organizations/emteens/hero.jpg",
  },
  myf: {
    slug: "myf",
    name: "MYF",
    tagline: "Methodist Youth Fellowship",
    description: "Empowering young people to lead and serve",
    heroImage: "/organizations/myf/hero.jpg",
  },
  wscs: {
    slug: "wscs",
    name: "WSCS",
    tagline: "Women's Service and Christian Fellowship",
    description: "Empowering women through faith, fellowship, and service",
    heroImage: "/organizations/wscs/hero.jpg",
  },
  "methodist-men": {
    slug: "methodist-men",
    name: "Methodist Men",
    tagline: "Serving God and community",
    description: "Men united in faith and fellowship",
    heroImage: "/organizations/methodist-men/hero.jpg",
  },
  choir: {
    slug: "choir",
    name: "EMTC Choir",
    tagline: "Praise the Lord with song",
    description: "Leading our congregation in worship through music",
    heroImage: "/organizations/choir/hero.jpg",
  },
} as const;
