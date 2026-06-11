import type { Metadata } from "next";
import { sortedBlogs } from "@/lib/data/blogs";
import { BlogList } from "@/components/sections/blogs";

export const metadata: Metadata = {
  title: "Blogs | Epworth Methodist Tamil Church",
  description: "Read our latest blog posts, life insights, and inspirations.",
};

export default function BlogsPage() {
  return (
    <main>
      <BlogList blogs={sortedBlogs} />
    </main>
  );
}
