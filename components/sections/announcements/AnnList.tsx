"use client";

import { useState, useMemo } from "react";
import { Calendar, User, Tag, ChevronLeft, ChevronRight } from "lucide-react";
import { Announcement } from "@/lib/data/announcements";

interface AnnListProps {
  announcements: Announcement[];
}

const ITEMS_PER_PAGE = 5;

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
  const totalPages = Math.ceil(filteredAnnouncements.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentAnnouncements = filteredAnnouncements.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when filtering
  };

  const getPriorityStyles = (priority: Announcement["priority"]) => {
    switch (priority) {
      case "new":
        return {
          badge: "bg-[var(--accent-5)] text-[var(--accent-1)]",
          border: "border-l-[var(--accent-5)]",
        };
      case "important":
        return {
          badge: "bg-[var(--color-highlight)] text-white",
          border: "border-l-[var(--color-highlight)]",
        };
      default:
        return {
          badge: "bg-[var(--accent-3)] text-[var(--foreground)]",
          border: "border-l-[var(--accent-3)]",
        };
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <section
      className="relative w-full bg-[var(--background)] py-20 lg:py-24"
      aria-labelledby="ann-list-heading"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-10 lg:mb-12">
          <span className="inline-block text-[var(--color-highlight)] text-sm font-semibold uppercase tracking-widest mb-3">
            Latest Updates
          </span>
          <h2
            id="ann-list-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--foreground)] leading-tight"
          >
            Church <span className="text-[var(--accent-2)]">Announcements</span>
          </h2>
        </header>

        {/* Category Filters */}
        {categories.length > 1 && (
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
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
          {currentAnnouncements.map((announcement) => {
            const priorityStyles = getPriorityStyles(announcement.priority);
            const isNew = announcement.priority === "new";

            return (
              <article
                key={announcement.id}
                className={`relative rounded-2xl border border-[var(--border-highlight)] backdrop-blur-lg shadow-xs overflow-hidden transition-all duration-300 hover:shadow-lg ${priorityStyles.border} border-l-4`}
                style={{ background: "var(--card-shade)" }}
              >
                {/* Priority Badge */}
                {isNew && (
                  <div className="absolute top-4 right-4 z-10">
                    <span
                      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${priorityStyles.badge}`}
                    >
                      NEW
                    </span>
                  </div>
                )}

                <div className="p-6 lg:p-8">
                  {/* Header Row */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-[var(--foreground)] leading-tight flex-1">
                      {announcement.title}
                    </h3>
                    <div className="flex flex-col items-start md:items-end gap-2 text-sm text-[var(--color-secondary-text)] mt-2 md:mt-0">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={announcement.date}>
                          {formatDate(announcement.date)}
                        </time>
                      </div>
                      {announcement.category && (
                        <div className="flex items-center gap-2">
                          <Tag className="w-4 h-4" />
                          <span>{announcement.category}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <p className="text-base text-[var(--color-secondary-text)] leading-relaxed mb-6">
                    {announcement.content}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-[var(--color-highlight)]/10">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-[var(--color-highlight)]" />
                      <span className="text-sm text-[var(--color-secondary-text)]">
                        {announcement.author}
                      </span>
                    </div>

                    {/* Priority Indicator */}
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          announcement.priority === "new"
                            ? "bg-[var(--accent-5)]"
                            : announcement.priority === "important"
                              ? "bg-[var(--color-highlight)]"
                              : "bg-[var(--accent-3)]"
                        }`}
                      />
                      <span className="text-xs text-[var(--color-secondary-text)] capitalize">
                        {announcement.priority}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredAnnouncements.length === 0 && (
          <div className="text-center py-16 rounded-2xl border border-[var(--border-highlight)] bg-[var(--card-shade)] backdrop-blur-sm mt-6">
            <p className="text-[var(--color-secondary-text)] text-lg">
              No announcements found for this category.
            </p>
            <button
              onClick={() => handleCategoryChange("All")}
              className="mt-4 text-[var(--color-highlight)] font-medium hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-full border border-[var(--border-highlight)] bg-[var(--card-shade)] text-[var(--foreground)] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[var(--accent-3)]/50 transition-colors"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => {
                const page = i + 1;
                const isActive = currentPage === page;
                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-[var(--accent-5)] text-[var(--accent-1)] border border-[var(--accent-5)]"
                        : "border border-[var(--border-highlight)] bg-[var(--card-shade)] text-[var(--color-secondary-text)] hover:bg-[var(--accent-3)]/50 hover:text-[var(--foreground)]"
                    }`}
                  >
                    {page}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-full border border-[var(--border-highlight)] bg-[var(--card-shade)] text-[var(--foreground)] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[var(--accent-3)]/50 transition-colors"
              aria-label="Next page"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default AnnList;
