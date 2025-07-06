import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <section className="flex justify-center items-center h-screen">
      <Loader className="size-8 animate-spin" />
    </section>
  );
};

export default Loading;
