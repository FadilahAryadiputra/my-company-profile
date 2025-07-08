import Link from "next/link";

import { CiLinkedin } from "react-icons/ci";
import { FiFacebook, FiInstagram } from "react-icons/fi";

// SSR: Fetch user data from randomuser.me
const getTeamMembers = async () => {
  const res = await fetch("https://randomuser.me/api/?results=6&nat=us");
  const data = await res.json();
  return data.results;
};

const roles = [
  "Founder & CEO",
  "Head of Design",
  "Marketing Director",
  "Brand Strategist",
  "Project Manager",
  "Creative Director",
];

const bios = [
  "With 10+ years of experience scaling brands, Esther leads the agency with a growth-first mindset and relentless focus on ROI.",
  "Expertise in performance marketing helps our clients reach the right audience at the right time with the right message.",
  "Blends creativity with strategy to craft designs that look beautiful—and work even harder.",
  "Brings operational excellence to every project, ensuring timelines are met and quality never slips.",
  "Leads client strategy with empathy and precision, turning business goals into actionable plans that deliver results.",
  "Brings a deep knowledge of SEO and SEM, helping brands stand out in a crowded digital landscape.",
];

const page = async () => {
  const team = await getTeamMembers();

  return (
    <main>
      <section className="bg-second min-h-[calc(100vh-80px-297px)] w-full">
        <div className="container mx-auto p-4 text-white">
          <div className="my-16 flex flex-col items-center gap-8 p-4 xl:mx-40">
            <h1 className="text-4xl font-bold">Our Best Team</h1>
            <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 md:grid-cols-3">
              {team.map((member: any, idx: number) => (
                <div key={idx} className="flex flex-col items-center gap-2">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={member.picture.large}
                      alt={member.name.first}
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
                        <div className="text-xl font-bold">
                          {member.name.first} {member.name.last}
                        </div>
                        <div>{roles[idx % roles.length]}</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-justify">{bios[idx % bios.length]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
