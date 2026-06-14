import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { blogs } from "@/data/blogs";
import { blogDetailPageSection } from "@/data/blogDetailPageSection";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const blog = blogs.find((b) => b.id === id);
  if (!blog) return { title: "Blog Not Found" };
  return {
    title: `${blog.title} | Epworth Methodist Tamil Church`,
    description: blog.excerpt,
  };
}

export default async function BlogPage({ params }: Props) {
  const { id } = await params;
  const blog = blogs.find((b) => b.id === id);

  if (!blog) return notFound();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(
      "en-US",
      blogDetailPageSection.dateFormat,
    );
  };

  return (
    <main className="min-h-screen bg-[var(--background)] py-12 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href={blogDetailPageSection.backLink.href}
          className="inline-flex items-center gap-2 mb-8 text-sm font-medium text-[var(--color-secondary-text)] hover:text-[var(--color-highlight)] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {blogDetailPageSection.backLink.text}
        </Link>

        {/* Article Container */}
        <article
          className="overflow-hidden rounded-3xl border border-[var(--border-highlight)] shadow-sm backdrop-blur-md"
          style={{ background: "var(--card-shade)" }}
        >
          {/* Hero Image & Headline */}
          <div className="relative w-full h-[300px] md:h-[450px]">
            <Image
              src={blog.imageUrl || "/home/1.jpg"}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/90 via-[#141414]/40 to-transparent" />

            <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
              <div className="flex flex-wrap gap-2 mb-4">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-[var(--accent-5)] text-[var(--accent-1)] text-xs font-bold uppercase tracking-wider rounded-full shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
                {blog.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/80 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-[var(--accent-5)]" />
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[var(--accent-5)]" />
                  <time dateTime={blog.date}>{formatDate(blog.date)}</time>
                </div>
              </div>
            </div>
          </div>

          {/* Content Box */}
          <div className="bg-[var(--surface-paper)] p-6 md:p-12 border-t border-[var(--border-highlight)]">
            <div
              className="text-base md:text-lg text-[var(--color-secondary-text)] leading-relaxed
                           [&>h1]:text-2xl [&>h1]:md:text-3xl [&>h1]:font-bold [&>h1]:text-[var(--foreground)] [&>h1]:mb-6 [&>h1]:mt-8 [&>h1:first-child]:mt-0
                           [&>h2]:text-xl [&>h2]:md:text-2xl [&>h2]:font-bold [&>h2]:text-[var(--foreground)] [&>h2]:mb-4 [&>h2]:mt-6
                           [&>p]:mb-6 [&>p:last-child]:mb-0
                           [&>ul]:list-disc [&>ul]:ml-6 [&>ul]:mb-6
                           [&>ol]:list-decimal [&>ol]:ml-6 [&>ol]:mb-6
                           [&>blockquote]:border-l-4 [&>blockquote]:border-[var(--color-highlight)] [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:mb-6"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>
        </article>
      </div>
    </main>
  );
}
