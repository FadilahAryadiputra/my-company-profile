import Loading from "@/components/Loading";
import { Suspense } from "react";
import BlogBody from "./_components/BlogBody";
import BlogHeader from "./_components/BlogHeader";

const BlogDetail = async ({
  params,
}: {
  params: Promise<{ objectId: string }>;
}) => {
  const objectId = (await params).objectId;

  return (
    <main>
      <section className="bg-second min-h-[calc(100vh-80px-297px)] w-full">
        <div className="container mx-auto p-4 text-white">
          <div className="my-20 flex flex-col items-center gap-8 p-4 xl:mx-40">
            <Suspense fallback={<Loading />}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <BlogHeader objectId={objectId} />
                <BlogBody objectId={objectId} />
              </div>
            </Suspense>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogDetail;
