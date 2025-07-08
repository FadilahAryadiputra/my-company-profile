import { FC } from "react";
import { getBlog } from "../_api/get-blog";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import Image from "next/image";

interface BlogHeaderProps {
  objectId: string;
}

const BlogHeader: FC<BlogHeaderProps> = async ({ objectId }) => {
  const blog = await getBlog(objectId);

  return (
    <section className="space-y-2 flex flex-col gap-2">
      <h1 className="text-2xl md:text-3xl font-bold">{blog.title}</h1>
      <div className="relative w-full h-[360px]">
        <Image
          src={blog.thumbnail}
          alt="thumbnail"
          className="object-cover"
          fill
        />
      </div>
      <Badge variant="outline" className="bg-green-100 capitalize">
        {blog.category}
      </Badge>
      <p className="font-extralight">
        {format(new Date(blog.created), "dd MMM yyyy")}
      </p>
    </section>
  );
};

export default BlogHeader;
