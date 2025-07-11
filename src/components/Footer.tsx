'use client';

import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

import Image from "next/image";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Footer = () => {
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    toast.success('Form Submitted');
    router.replace('/');
  };
  return (
    <footer className="bg-second px-4 md:px-24">
      <div className="container mx-auto flex flex-col justify-between gap-2 p-4 text-white">
        <div className="xs:grid-cols-2 mt-2 grid grid-cols-1 gap-4 text-sm md:grid-cols-4 xl:gap-16">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center gap-2">
              <div className="size-[30px] md:size-[50px] overflow-hidden">
                <Image
                  src="/images/logo.png"
                  alt="company-logo"
                  width={600}
                  height={600}
                  className="object-cover"
                />
              </div>
              <div className="text-2xl font-bold">ARIA</div>
            </div>
            <div>
              We&apos;re a team of strategic creator and digital innovator,
              united focus in out pursuit of mastery and joyful.
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-base font-bold">Pages</div>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about-us">About Us</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/blogs">Blog List</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-base font-bold">Utility Pages</div>
            <ul>
              <li>Style Guide</li>
              <li>Instruction</li>
              <li>License</li>
              <li>Changelog</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-base font-bold">Subscribe</div>
            <div>
              <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                    <svg
                      className="h-4 w-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 16"
                    >
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                  </div>
                  <Input
                    type="search"
                    id="search"
                    className="block w-full rounded-l-full rounded-r-full border border-gray-300 bg-gray-50 py-3 ps-10 pr-2 text-sm text-gray-900 lg:py-6 lg:pr-26"
                    placeholder="Email"
                    required
                  />
                  <Button
                    type="submit"
                    className="absolute top-2 right-2 hidden rounded-l-full rounded-r-full px-4 py-2 text-sm font-medium text-white hover:bg-neutral-600 focus:ring-4 focus:ring-blue-300 focus:outline-none active:bg-black lg:block"
                  >
                    Subscribe
                  </Button>
                </div>
                <Button
                  type="submit"
                  className="block w-full rounded-l-full rounded-r-full hover:bg-neutral-600 lg:hidden"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
        <div className="relative flex w-full items-center py-2">
          <div className="flex-grow border-t-1 border-white"></div>
        </div>
        <div className="flex flex-row items-center justify-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white">
            <span className="font-bold text-white">A</span>
          </div>
          <div className="flex flex-col justify-center text-xs">
            <div>© 2025 ARIA™</div>
            <div>All Right Reserved</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
