import type { Metadata } from "next";
import { sortedBlogs } from "@/data/blogs";
import { BlogList } from "@/components/sections/index";

export const metadata: Metadata = {
  title: "Blogs | Epworth Methodist Tamil Church",
  description: "Read our latest blog posts, life insights, and inspirations.",
};

export default function BlogsPage() {
  return (
    <>
      <BlogList blogs={sortedBlogs} />
    </>
  );
}
