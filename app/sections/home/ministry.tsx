"use client";

import MinistryCard from "@/components/home/MinistryCard";

const ministries = [
  {
    id: 1,
    title: "Worship Team",
    description: "Leading our congregation in praise and worship",
    image: "/home/1.jpg",
    href: "/ministries/worship",
  },
  {
    id: 2,
    title: "Youth Ministry",
    description: "Discipling the next generation of believers",
    image: "/home/1.jpg",
    href: "/ministries/youth",
  },
  {
    id: 3,
    title: "Children's Ministry",
    description: "Nurturing young hearts for Jesus",
    image: "/home/1.jpg",
    href: "/ministries/children",
  },
  {
    id: 4,
    title: "Prayer Ministry",
    description: "Interceding for our church and community",
    image: "/home/1.jpg",
    href: "/ministries/prayer",
  },
  {
    id: 5,
    title: "Care Ministry",
    description: "Supporting those in need within our community",
    image: "/home/1.jpg",
    href: "/ministries/care",
  },
  {
    id: 6,
    title: "Outreach Ministry",
    description: "Sharing God's love beyond our walls",
    image: "/home/1.jpg",
    href: "/ministries/outreach",
  },
];

const Ministry = () => {
  return (
    <section
      className="relative w-full py-16 lg:py-24 bg-[var(--background)]"
      aria-labelledby="ministry-heading"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Title and Description */}
        <header className="text-center mb-12 lg:mb-16">
          {/* Section Label */}
          <span className="inline-block text-[var(--color-highlight)] text-sm font-semibold uppercase tracking-widest mb-3">
            Our Ministries
          </span>

          {/* Title */}
          <h2
            id="ministry-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--foreground)] leading-tight mb-2"
          >
            Serve <span className="text-[var(--color-highlight)]">With Us</span>
          </h2>

          <p className="text-[var(--color-secondary-text)] text-lg max-w-2xl mx-auto">
            Find your place to serve and grow in faith with our various ministry teams
          </p>
        </header>

        {/* Ministry Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {ministries.map((ministry) => (
            <MinistryCard
              key={ministry.id}
              title={ministry.title}
              description={ministry.description}
              image={ministry.image}
              href={ministry.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ministry;
