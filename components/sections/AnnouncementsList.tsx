"use client";

import { useState, useMemo } from "react";
import { Announcement } from "@/data/announcements";
import { announcementsListSection } from "@/data/announcementsListSection";
import AnnouncementCard from "@/components/ui/AnnouncementCard";
import Pagination from "@/components/ui/Pagination";

interface AnnListProps {
  announcements: Announcement[];
}

const AnnList = ({ announcements }: AnnListProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set(
      announcements.map((a) => a.category).filter(Boolean) as string[],
    );
    return ["All", ...Array.from(cats)];
  }, [announcements]);

  // Filter announcements
  const filteredAnnouncements = useMemo(() => {
    if (selectedCategory === "All") return announcements;
    return announcements.filter((a) => a.category === selectedCategory);
  }, [announcements, selectedCategory]);

  // Pagination logic
  const totalPages = Math.ceil(
    filteredAnnouncements.length / announcementsListSection.itemsPerPage,
  );
  const startIndex = (currentPage - 1) * announcementsListSection.itemsPerPage;
  const currentAnnouncements = filteredAnnouncements.slice(
    startIndex,
    startIndex + announcementsListSection.itemsPerPage,
  );

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when filtering
  };

  return (
    <section
      className="relative w-full bg-[var(--background)] py-12 md:py-20 lg:py-24"
      aria-labelledby="ann-list-heading"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-8 md:mb-12">
          <span className="inline-block text-[var(--color-highlight)] text-sm font-semibold uppercase tracking-widest mb-3">
            {announcementsListSection.eyebrow}
          </span>
          <h2
            id="ann-list-heading"
            className="font-bold text-[var(--foreground)] leading-tight"
          >
            {announcementsListSection.heading.prefix}{" "}
            <span className="text-[var(--accent-2)]">
              {announcementsListSection.heading.highlighted}
            </span>
          </h2>
        </header>

        {/* Category Filters */}
        {categories.length > 1 && (
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 md:mb-10">
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                    isActive
                      ? "bg-[var(--accent-5)] text-[var(--accent-1)] border-[var(--accent-5)] shadow-md"
                      : "bg-[var(--card-shade)] text-[var(--color-secondary-text)] border-[var(--border-highlight)] hover:bg-[var(--accent-3)]/50 hover:text-[var(--foreground)]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        )}

        {/* Announcements List */}
        <div className="space-y-6">
          {currentAnnouncements.map((announcement) => (
            <AnnouncementCard
              key={announcement.id}
              announcement={announcement}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredAnnouncements.length === 0 && (
          <div className="text-center py-16 rounded-2xl border border-[var(--border-highlight)] bg-[var(--card-shade)] backdrop-blur-sm mt-6">
            <p className="text-[var(--color-secondary-text)] text-base md:text-lg">
              {announcementsListSection.emptyState.message}
            </p>
            <button
              onClick={() => handleCategoryChange("All")}
              className="mt-4 text-[var(--color-highlight)] font-medium hover:underline"
            >
              {announcementsListSection.emptyState.buttonLabel}
            </button>
          </div>
        )}

        {/* Pagination Controls */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </section>
  );
};

export default AnnList;
