"use client";

import useGetBlogs from "../_hooks/useGetBlogs";
import BlogCard from "./BlogCard";
import BlogCardSkeleton from "./BlogCardSkeleton";

const BlogList = () => {
  const { data: blogs, isPending } = useGetBlogs();

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {isPending && <BlogCardSkeleton count={4} />}

      {blogs?.map((blog) => (
        <BlogCard key={blog.objectId} blog={blog} />
      ))}
    </section>
  );
};

export default BlogList;
