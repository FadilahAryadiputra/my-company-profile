import Link from "next/link";

import Image from "next/image";

const page = () => {
  return (
    <>
      <main>
        <section className="bg-second min-h-[calc(100vh-80px-297px)] w-full">
          <div className="container mx-auto p-4 text-white">
            <div className="my-16 xl:mx-40">
              <h1 className="p-4 text-3xl font-bold">About Us</h1>
              <div className="grid grid-cols-1 gap-2 px-4 md:grid-cols-2">
                <div className="order-last flex basis-1/2 flex-col gap-2 md:order-first">
                  <h3 className="text-xl font-bold">Who We Are</h3>
                  <p>
                    We are a growth-focused digital agency dedicated to
                    transforming businesses. Whether you&apos;re a startup or an
                    established brand, our mission is simple: take your business
                    to the next level through tailored strategy, creative
                    innovation, and measurable results.
                  </p>
                  <p>
                    We&apos;re not just service providers—we&apos;re partners in
                    your journey. Whether you want more leads, higher
                    engagement, or a total brand revamp, we&apos;re here to help
                    you grow smarter, faster, and bigger.
                  </p>
                  <h3 className="mt-4 text-xl font-bold">We believe in:</h3>
                  <ul className="list-disc pl-4">
                    <li>
                      <span className="font-bold">Client-first mentality</span>{" "}
                      - your success is our mission
                    </li>
                    <li>
                      <span className="font-bold">
                        Open, honest collaboration
                      </span>{" "}
                      - clear communication, no fluff, just clarity
                    </li>
                    <li>
                      <span className="font-bold">
                        Agile and adaptable thinking
                      </span>{" "}
                      - because your market changes fast
                    </li>
                    <li>
                      <span className="font-bold">Continuous learning</span> -
                      we stay ahead so you stay ahead
                    </li>
                    <li>
                      <span className="font-bold">A passion for impact</span> -
                      we celebrate results, not just effort
                    </li>
                  </ul>
                </div>
                <div className="flex basis-1/2 items-center justify-center gap-4">
                  <div className="flex flex-col items-center gap-4 text-center">
                    <div className="size-[160px] xs:size-auto overflow-hidden">
                      <Image
                        src="/images/team-photo-2.jpg"
                        alt="TeamPhoto2"
                        width={600}
                        height={600}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex justify-center gap-2 text-center">
                      <div>
                        <div className="text-3xl font-bold">10K</div>
                        <div>Great conversation pre month</div>
                      </div>
                      <div className="relative flex h-auto flex-col justify-center px-2">
                        <div className="flex-grow border-l-2 border-white"></div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold">95+</div>
                        <div>Project Complete</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-6 text-center">
                    <Link href={"/teams"}>
                      <div className="flex flex-col items-center gap-1">
                        <div>Our Team Member</div>
                        <div className="flex gap-1">
                          <div className="size-[30px] overflow-hidden rounded-full bg-white">
                            <Image
                              src="/images/team-face-1.jpg"
                              alt="Team-Face-1"
                              width={600}
                              height={600}
                              className="object-cover"
                            />
                          </div>
                          <div className="size-[30px] overflow-hidden rounded-full bg-white">
                            <Image
                              src="/images/team-face-2.jpg"
                              alt="Team-Face-2"
                              width={600}
                              height={600}
                              className="object-cover"
                            />
                          </div>
                          <div className="size-[30px] overflow-hidden rounded-full bg-white">
                            <Image
                              src="/images/team-face-3.jpg"
                              alt="Team-Face-3"
                              width={600}
                              height={600}
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                    <div className="overflow-hidden">
                      <Image
                      src="/images/team-photo-3.jpg"
                      alt="Client 1"
                      width={600}
                      height={600}
                      className="object-cover"
                    />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-white">
          <div className="container mx-auto">
            <div className="my-10 grid grid-cols-1 gap-2 p-4 md:grid-cols-2 xl:mx-40">
              <div className="max-h-[560px] overflow-hidden px-12">
                <Image
                  src="/images/team-photo-4.jpg"
                  alt="Client 1"
                  width={600}
                  height={600}
                  className="object-cover"
                />
              </div>
              <div className="flex basis-1/2 flex-col justify-center gap-4">
                <div className="flex flex-col">
                  <h1 className="text-2xl font-bold md:text-3xl">
                    Taking Your Business to the Next Level
                  </h1>
                  <p>
                    At <span className="font-bold">ARIA</span>, we don&apos;t
                    just create websites or marketing campaigns—we craft
                    strategies that help businesses scale with confidence. From
                    early-stage startups to established brands, our mission is
                    clear: drive real growth through creativity, strategy, and
                    data-driven execution.
                  </p>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xl font-bold">Our Journey</h3>
                  <p>
                    We began with one bold idea: help businesses unlock their
                    full potential in the digital space. Since our founding in
                    2001, we&apos;ve partnered with over 1.000+ companies across
                    industries, delivering results that speak louder than
                    promises.
                  </p>
                </div>
                <div className="flex flex-col">
                  <h4 className="text-lg font-bold">
                    Milestones That Define Us:
                  </h4>
                  <ul>
                    <li>
                      🚀 2001: Launched with a mission to empower business
                      growth
                    </li>
                    <li>💼 2008: First 100 projects successfully delivered</li>
                    <li>
                      🌍 2012: Expanded globally, serving clients across 21
                      countries
                    </li>
                    <li>
                      🏆 2020: Awarded [Notable Recognition or Certification]
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xl font-bold">
                    Let&apos;s Grow Together
                  </h3>
                  <p>
                    We&apos;re more than a digital agency—we&apos;re a growth
                    partner. Whether you need to boost visibility, generate
                    leads, or redefine your brand, we&apos;re here to turn your
                    vision into momentum.
                  </p>
                  <h4 className="font-bold">
                    Ready to take your business to the next level?
                  </h4>
                  <p>Let&apos;s build something extraordinary—together.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default page;
