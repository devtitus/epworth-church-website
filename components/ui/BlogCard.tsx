import Image from "next/image";
import Link from "next/link";
import { Calendar, User, Tag } from "lucide-react";
import { Blog } from "@/data/blogs";

interface BlogCardProps {
  blog: Blog;
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <Link href={`/blogs/${blog.id}`} className="group flex h-full">
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
                <span className="font-medium text-[var(--accent-1)] text-xs uppercase tracking-wider">
                  {blog.tags[0]}
                </span>
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
  );
};

export default BlogCard;
