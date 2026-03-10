"use client";

import Image from "next/image";
import Link from "next/link";

interface MinistryCardProps {
  title: string;
  description: string;
  image: string;
  href?: string;
}

const MinistryCard = ({ title, description, image, href = "#" }: MinistryCardProps) => {
  return (
    <Link 
      href={href}
      className="group rounded-2xl overflow-hidden border border-[var(--border-highlight)] backdrop-blur-lg shadow-xs block"
    >
      {/* Image Container with Black Gradient Overlay */}
      <div className="relative h-64 w-full overflow-hidden">
        {/* Black gradient overlay - positioned at bottom for text visibility */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.1) 100%)',
          }}
        />
        
        {/* Image */}
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        
        {/* Card Content - positioned absolutely over the image */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
          <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[var(--accent-5)] transition-colors duration-300">
            {title}
          </h3>
          <p className="text-white/80 text-sm">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MinistryCard;
