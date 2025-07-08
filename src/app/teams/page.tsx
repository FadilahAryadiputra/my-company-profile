import Link from "next/link";

import Image from "next/image";

import { FiFacebook, FiInstagram } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";

const page = () => {
  return (
    <main>
      <section className="bg-second min-h-[calc(100vh-80px-297px)] w-full">
        <div className="container mx-auto p-4 text-white">
          <div className="my-16 flex flex-col items-center gap-8 p-4 xl:mx-40">
            <h1 className="text-4xl font-bold">Our Best Team</h1>
            <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center gap-2">
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src="/images/team-solo-1.jpg"
                    alt="Team-Solo-1"
                    width={600}
                    height={600}
                    className="mask-b-from-60% object-cover"
                  />
                  <div className="absolute top-3 right-3 flex gap-2">
                    <Link href={"#"}>
                      <div className="rounded-full bg-white p-2">
                        <FiFacebook className="text-lg text-black" />
                      </div>
                    </Link>
                    <Link href={"#"}>
                      <div className="rounded-full bg-white p-2">
                        <FiInstagram className="text-lg text-black" />
                      </div>
                    </Link>
                    <Link href={"#"}>
                      <div className="rounded-full bg-white p-2">
                        <CiLinkedin className="text-lg text-black" />
                      </div>
                    </Link>
                  </div>
                  <div className="absolute top-10/12 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 transform px-6">
                    <div className="flex flex-col">
                      <div className="text-xl font-bold">Esther Howards</div>
                      <div>Founder & CEO</div>
                    </div>
                  </div>
                </div>
                <p className="text-justify">
                  With 10+ years of experience scaling brands, Esther leads the
                  agency with a growth-first mindset and relentless focus on
                  ROI.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src="/images/team-solo-2.jpg"
                    alt="Team-Solo-2"
                    width={600}
                    height={600}
                    className="mask-b-from-60% object-cover"
                  />
                  <div className="absolute top-3 right-3 flex gap-2">
                    <Link href={"#"}>
                      <div className="rounded-full bg-white p-2">
                        <FiFacebook className="text-lg text-black" />
                      </div>
                    </Link>
                    <Link href={"#"}>
                      <div className="rounded-full bg-white p-2">
                        <FiInstagram className="text-lg text-black" />
                      </div>
                    </Link>
                    <Link href={"#"}>
                      <div className="rounded-full bg-white p-2">
                        <CiLinkedin className="text-lg text-black" />
                      </div>
                    </Link>
                  </div>
                  <div className="absolute top-10/12 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 transform px-6">
                    <div className="flex flex-col">
                      <div className="text-xl font-bold">Camero William</div>
                      <div>Marketing Director</div>
                    </div>
                  </div>
                </div>
                <p className="text-justify">
                  William&apos;s expertise in performance marketing helps our
                  clients reach the right audience at the right time with the
                  right message.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src="/images/team-solo-3.jpg"
                    alt="Team-Solo-3"
                    width={600}
                    height={600}
                    className="mask-b-from-60% object-cover"
                  />
                  <div className="absolute top-3 right-3 flex gap-2">
                    <Link href={"#"}>
                      <div className="rounded-full bg-white p-2">
                        <FiFacebook className="text-lg text-black" />
                      </div>
                    </Link>
                    <Link href={"#"}>
                      <div className="rounded-full bg-white p-2">
                        <FiInstagram className="text-lg text-black" />
                      </div>
                    </Link>
                    <Link href={"#"}>
                      <div className="rounded-full bg-white p-2">
                        <CiLinkedin className="text-lg text-black" />
                      </div>
                    </Link>
                  </div>
                  <div className="absolute top-10/12 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 transform px-6">
                    <div className="flex flex-col">
                      <div className="text-xl font-bold">Liam Cooper</div>
                      <div>Head of Design</div>
                    </div>
                  </div>
                </div>
                <p className="text-justify">
                  Liam blends creativity with strategy to craft designs that
                  look beautiful—and work even harder.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
