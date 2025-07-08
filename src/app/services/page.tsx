import { BsPalette, BsVectorPen } from "react-icons/bs";
import { RiUserVoiceLine } from "react-icons/ri";
import { SlPencil } from "react-icons/sl";
import { TbDiamondFilled, TbSpeakerphone } from "react-icons/tb";

const Services = () => {
  return (
    <main>
      <section className="bg-second min-h-[calc(100vh-233px)] w-full">
        <div className="container mx-auto p-4">
          <div className="mx-0 my-16 flex flex-col items-center gap-8 p-4 lg:mx-20">
            <h1 className="text-2xl font-medium text-cyan-500">Our Services</h1>
            <div className="max-w-xs text-center text-3xl font-bold text-white">
              High-impact services for your business
            </div>
            <div className="mt-4 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
              <div className="flex flex-col gap-2 rounded-2xl bg-gray-300 p-8">
                <div className="flex-start mb-2 flex items-center gap-4">
                  <div className="rounded-full bg-black p-4">
                    <SlPencil className="text-lg text-white" />
                  </div>
                  <div className="text-2xl font-bold">Content Marketing</div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-base/5">
                    We craft engaging, SEO-friendly content that drives traffic,
                    boosts engagement, and connects authentically with your
                    audience.
                  </div>
                  <div className="flex flex-col">
                    <div className="font-bold">Pricing:</div>
                    <ul className="list-disc pl-4">
                      <li>Starter: Rp 8.000.000/month &#40;4 blog posts&#41;</li>
                      <li>Growth: Rp 19.000.000/month (10 posts + social content)</li>
                      <li>
                        Enterprise: Custom (strategy, content, SEO reports)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 rounded-2xl bg-gray-300 p-8">
                <div className="flex-start mb-2 flex items-center gap-4">
                  <div className="rounded-full bg-black p-4">
                    <BsVectorPen className="text-lg text-white" />
                  </div>
                  <div className="text-2xl font-bold">Graphic Design</div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-base/5">
                    Bring your brand to life with stunning visuals. We design
                    assets tailored to tell your story and captivate your
                    audience.
                  </div>
                  <div className="flex flex-col">
                    <div className="font-bold">Pricing:</div>
                    <ul className="list-disc pl-4">
                      <li>Basic Package: Rp 4.800.000 (5 design assets)</li>
                      <li>Brand Kit: Rp 12.000.000 (logo, palette, templates)</li>
                      <li>
                        Full Support: Rp 24.000.000/month (ongoing design)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 rounded-2xl bg-gray-300 p-8">
                <div className="flex-start mb-2 flex items-center gap-4">
                  <div className="rounded-full bg-black p-4">
                    <TbSpeakerphone className="text-lg text-white" />
                  </div>
                  <div className="text-2xl font-bold">Digital Marketing</div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-base/5">
                    Boost your brand&apos;s visibility with data-driven
                    strategies across SEO, social media, and paid advertising.
                  </div>
                  <div className="flex flex-col">
                    <div className="font-bold">Pricing:</div>
                    <ul className="list-disc pl-4">
                      <li>SEO Kickstart: Rp 9.600.000/month</li>
                      <li>Ads Management: Rp 12.800.000/month</li>
                      <li>Full Stack: Rp 28.800.000/month (SEO + Ads + Social)</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 rounded-2xl bg-gray-300 p-8">
                <div className="flex-start mb-2 flex items-center gap-4">
                  <div className="rounded-full bg-black p-4">
                    <BsPalette className="text-lg text-white" />
                  </div>
                  <div className="text-2xl font-bold">Web Design</div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-base/5">
                    We build stunning, responsive websites that align with your
                    brand and convert visitors into loyal customers.
                  </div>
                  <div className="flex flex-col">
                    <div className="font-bold">Pricing:</div>
                    <ul className="list-disc pl-4">
                      <li>One-Page Site: Rp 12.000.000</li>
                      <li>Business Website: Rp 24.000.000 (5 pages + CMS)</li>
                      <li>
                        E-commerce: From Rp 48.000.000 (store, payment, shipping)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 rounded-2xl bg-gray-300 p-8">
                <div className="flex-start mb-2 flex items-center gap-4">
                  <div className="rounded-full bg-black p-4">
                    <RiUserVoiceLine className="text-lg text-white" />
                  </div>
                  <div className="text-2xl font-bold">IT Consulting</div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-base/5">
                    We provide expert IT strategy and implementation services to ensure your tech supports your business goals.
                  </div>
                  <div className="flex flex-col">
                    <div className="font-bold">Pricing:</div>
                    <ul className="list-disc pl-4">
                      <li>Audit & Strategy: Rp 8.000.000</li>
                      <li>Project Consulting: Rp 19.000.000/project</li>
                      <li>
                        Ongoing Support: Rp 16.000.000/month
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 rounded-2xl bg-gray-300 p-8">
                <div className="flex-start mb-2 flex items-center gap-4">
                  <div className="rounded-full bg-black p-4">
                    <TbDiamondFilled className="text-lg text-white" />
                  </div>
                  <div className="text-2xl font-bold">Brand Identity</div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-base/5">
                    We help you create a memorable, consistent brand image that resonates with your audience and sets you apart.
                  </div>
                  <div className="flex flex-col">
                    <div className="font-bold">Pricing:</div>
                    <ul className="list-disc pl-4">
                      <li>Brand Discovery: Rp 9.600.000</li>
                      <li>Full Identity Package: Rp 24.000.000</li>
                      <li>
                        Rebranding: Custom pricing
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
