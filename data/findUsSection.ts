export const findUsSection = {
  ariaLabel: "Find Us - Visit Epworth Methodist Tamil Church",
  sectionLabel: "Visit Us",
  title: {
    prefix: "Find",
    highlighted: "Us",
  },
  description:
    "Join us for worship and experience the warmth of our community",
  address: {
    name: "Epworth Methodist Tamil Church",
    street: "No. 25, Museum Road",
    cityState: "Bengaluru, Karnataka 560001",
    country: "India",
  },
  services: [
    {
      id: "sunday",
      title: "Sunday Service",
      icon: "Calendar",
      timeRange: { start: "8:30 AM", end: "10:00 AM" },
      frequency: "Every Sunday",
    },
    {
      id: "dawn",
      title: "Dawn Service",
      icon: "Clock",
      details: ["1st of Every Month", "5:30 AM Onwards"],
    },
  ],
  map: {
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.541663048926!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0x8c4b8e9e9e9e9e9e!2sBangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890",
    title: "Church Location Map",
  },
  directions: {
    heading: "Get Directions",
    description: "Navigate to our church",
  },
} as const;