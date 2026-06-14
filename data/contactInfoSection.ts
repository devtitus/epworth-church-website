export const contactInfoSection = {
  details: [
    {
      icon: "MapPin",
      label: "Our Location",
      value: ["123 Epworth Avenue", "Navi Mumbai, Maharashtra 400703"],
      action: null,
    },
    {
      icon: "Phone",
      label: "Phone Number",
      value: "+91 98765 43210",
      action: "tel:+919876543210",
    },
    {
      icon: "Mail",
      label: "Email Address",
      value: "hello@epworthmtc.org",
      action: "mailto:hello@epworthmtc.org",
    },
    {
      icon: "Clock",
      label: "Service Timings",
      value: "Sunday: 8:30 AM & 10:30 AM",
      action: null,
    },
  ],
  map: {
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120612.98394432296!2d72.9515082158694!3d19.141543789523295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1bfe7465369%3A0xc3fecff08ebd92ac!2sNavi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1709400000000!5m2!1sen!2sin",
    title: "Google Map Location",
  },
} as const;