import { FC } from "react";
import Markdown from "@/components/Markdown";
import { getBlog } from "../_api/get-blog";

interface BlogBodyProps {
  objectId: string;
}

const BlogBody: FC<BlogBodyProps> = async ({ objectId }) => {
  const blog = await getBlog(objectId);

  return (
    <section className="mt-8">
      <Markdown content={blog.content} />
    </section>
  )
}

export default BlogBody;