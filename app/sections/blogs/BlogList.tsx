"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, Tag, ChevronLeft, ChevronRight } from "lucide-react";
import { Blog } from "@/lib/data/blogs";

interface BlogListProps {
  blogs: Blog[];
}

const ITEMS_PER_PAGE = 6;

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
  const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentBlogs = filteredBlogs.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handleTagChange = (tag: string) => {
    setSelectedTag(tag);
    setCurrentPage(1); // Reset to first page when filtering
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
      aria-labelledby="blog-list-heading"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-10 lg:mb-12">
          <span className="inline-block text-[var(--color-highlight)] text-sm font-semibold uppercase tracking-widest mb-3">
            Church Blog
          </span>
          <h2
            id="blog-list-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--foreground)] leading-tight"
          >
            Insights & <span className="text-[var(--accent-2)]">Inspirations</span>
          </h2>
        </header>

        {/* Tag Filters */}
        {tags.length > 1 && (
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {tags.map((tag) => {
              const isActive = selectedTag === tag;
              return (
                <button
                  key={tag}
                  onClick={() => handleTagChange(tag)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentBlogs.map((blog) => (
            <Link href={`/blogs/${blog.id}`} key={blog.id} className="group flex h-full">
              <article
                className="relative flex flex-col w-full rounded-2xl border border-[var(--border-highlight)] shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{ background: "var(--card-shade)" }}
              >
                {/* Image Section */}
                <div className="relative h-48 w-full overflow-hidden border-b border-[var(--border-highlight)]">
                    <Image
                      src={blog.imageUrl || "/home/1.jpg"}
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                </div>

                <div className="flex flex-col flex-grow p-6 lg:p-8 backdrop-blur-sm">
                  {/* Meta (Date + Primary Tag) */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4 text-sm text-[var(--color-secondary-text)]">
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[var(--color-highlight)]" />
                        <time dateTime={blog.date}>{formatDate(blog.date)}</time>
                    </div>
                    {blog.tags.length > 0 && (
                        <div className="flex items-center gap-1">
                            <Tag className="w-3 h-3 text-[var(--color-highlight)]" />
                            <span className="font-medium text-[var(--accent-1)] text-xs uppercase tracking-wider">{blog.tags[0]}</span>
                        </div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-[var(--foreground)] leading-tight mb-3 group-hover:text-[var(--color-highlight)] transition-colors">
                    {blog.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-base text-[var(--color-secondary-text)] leading-relaxed mb-6 flex-grow">
                    {blog.excerpt}
                  </p>

                  {/* Footer (Author) */}
                  <div className="flex items-center gap-2 pt-4 border-t border-[var(--color-highlight)]/10 mt-auto">
                    <User className="w-4 h-4 text-[var(--color-highlight)]" />
                    <span className="text-sm font-medium text-[var(--foreground)]">
                      {blog.author}
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredBlogs.length === 0 && (
          <div className="text-center py-16 rounded-2xl border border-[var(--border-highlight)] bg-[var(--card-shade)] backdrop-blur-sm mt-6">
            <p className="text-[var(--color-secondary-text)] text-lg">
              No blog posts found for this tag.
            </p>
            <button
              onClick={() => handleTagChange("All")}
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

export default BlogList;
