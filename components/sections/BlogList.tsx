"use client";

import { useState, useMemo } from "react";
import { Blog } from "@/data/blogs";
import { blogListSection } from "@/data/blogListSection";
import BlogCard from "@/components/ui/BlogCard";
import Pagination from "@/components/ui/Pagination";

interface BlogListProps {
  blogs: Blog[];
}

const BlogList = ({ blogs }: BlogListProps) => {
  const [selectedTag, setSelectedTag] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Extract unique tags
  const tags = useMemo(() => {
    const allTags = blogs.flatMap((b) => b.tags);
    const uniqueTags = new Set(allTags);
    return ["All", ...Array.from(uniqueTags)];
  }, [blogs]);

  // Filter blogs based on tag
  const filteredBlogs = useMemo(() => {
    if (selectedTag === "All") return blogs;
    return blogs.filter((b) => b.tags.includes(selectedTag));
  }, [blogs, selectedTag]);

  // Pagination logic
  const totalPages = Math.ceil(
    filteredBlogs.length / blogListSection.itemsPerPage,
  );
  const startIndex = (currentPage - 1) * blogListSection.itemsPerPage;
  const currentBlogs = filteredBlogs.slice(
    startIndex,
    startIndex + blogListSection.itemsPerPage,
  );

  const handleTagChange = (tag: string) => {
    setSelectedTag(tag);
    setCurrentPage(1); // Reset to first page when filtering
  };

  return (
    <section
      className="relative w-full bg-[var(--background)] py-12 md:py-20 lg:py-24"
      aria-labelledby="blog-list-heading"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-8 md:mb-12">
          <span className="inline-block text-[var(--color-highlight)] text-sm font-semibold uppercase tracking-widest mb-3">
            {blogListSection.eyebrow}
          </span>
          <h2
            id="blog-list-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--foreground)] leading-tight"
          >
            {blogListSection.heading.prefix}{" "}
            <span className="text-[var(--accent-2)]">
              {blogListSection.heading.highlighted}
            </span>
          </h2>
        </header>

        {/* Tag Filters */}
        {tags.length > 1 && (
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 md:mb-12">
            {tags.map((tag) => {
              const isActive = selectedTag === tag;
              return (
                <button
                  key={tag}
                  onClick={() => handleTagChange(tag)}
                  className={`px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                    isActive
                      ? "bg-[var(--accent-5)] text-[var(--accent-1)] border-[var(--accent-5)] shadow-md"
                      : "bg-[var(--card-shade)] text-[var(--color-secondary-text)] border-[var(--border-highlight)] hover:bg-[var(--accent-3)]/50 hover:text-[var(--foreground)]"
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        )}

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {currentBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* Empty State */}
        {filteredBlogs.length === 0 && (
          <div className="text-center py-16 rounded-2xl border border-[var(--border-highlight)] bg-[var(--card-shade)] backdrop-blur-sm mt-6">
            <p className="text-[var(--color-secondary-text)] text-lg">
              {blogListSection.emptyState.message}
            </p>
            <button
              onClick={() => handleTagChange("All")}
              className="mt-4 text-[var(--color-highlight)] font-medium hover:underline"
            >
              {blogListSection.emptyState.buttonLabel}
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

export default BlogList;
