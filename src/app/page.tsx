import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import LayeredImage from "@/components/LayeredImage";
import { BsPalette, BsVectorPen } from "react-icons/bs";
import { RiUserVoiceLine } from "react-icons/ri";
import { SlPencil } from "react-icons/sl";
import { TbDiamondFilled, TbSpeakerphone } from "react-icons/tb";

export default function Home() {
  return (
    <main>
      <section className="bg-second w-full">
        <div className="container mx-auto py-4">
          <div className="flex min-h-screen justify-between p-4 text-white">
            <div className="mx-0 my-20 flex items-center gap-2 md:mx-10">
              <div className="grid gap-4 md:grid-cols-2 md:gap-16">
                <div className="flex flex-col justify-between px-6 lg:px-10">
                  <div className="flex items-center">
                    <div className="flex flex-col gap-6">
                      <h1 className="text-4xl font-bold md:text-5xl">
                        Ready to take your Business Growth to the next level?
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ratione, minima vitae. Tenetur unde itaque tempore
                        nulla. Temporibus natus quam minima.
                      </p>
                      <Link href={"#"}>
                        <Button
                          variant="secondary"
                          className="rounded-l-full rounded-r-full"
                        >
                          Start your Free Trial
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col py-6">
                    <div>Trusted by Leading Brands</div>
                    <div className="flex gap-2">
                      <div>Greenish</div>
                      <div>Automation</div>
                      <div>Leafe</div>
                      <div>Mindfulness</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="rounded-full border p-6">
                    <div className="rounded-full border p-6">
                      <div className="size-[220px] rounded-full border-1 border-second bg-white md:size-[280px] lg:size-[360px]">
                        <Image
                          src="/images/hero.png"
                          alt="hero-image"
                          width={800}
                          height={800}
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-white">
        <div className="container mx-auto py-4">
          <div className="flex flex-col items-center justify-center gap-4 px-8 py-16 md:px-16 lg:px-24">
            <h1 className="text-xl font-medium text-cyan-500">Our Services</h1>
            <div className="max-w-xs text-center text-3xl font-bold">
              High-impact services for your business
            </div>
            <div className="mt-4 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col justify-between gap-2 rounded-2xl bg-gray-300 p-8">
                <div className="flex-start mb-8 flex">
                  <div className="rounded-full bg-black p-4">
                    <SlPencil className="text-lg text-white" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-lg font-bold">Content Marketing</div>
                  <div className="text-base/5">
                    Our team creates engaging and shareable content that
                    resonates with your audiance, drives organic traffic
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between gap-2 rounded-2xl bg-gray-300 p-8">
                <div className="flex-start mb-8 flex">
                  <div className="rounded-full bg-black p-4">
                    <BsVectorPen className="text-lg text-white" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-lg font-bold">Graphic Design</div>
                  <div className="text-base/5">
                    Unlock the power of visual storytelling with our expert
                    graphic design service tailored to elevate your brand and
                    captivate
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between gap-2 rounded-2xl bg-gray-300 p-8">
                <div className="flex-start mb-8 flex">
                  <div className="rounded-full bg-black p-4">
                    <TbSpeakerphone className="text-lg text-white" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-lg font-bold">Digital Marketing</div>
                  <div className="text-base/5">
                    Elevate your brand&apos;s online presence with out
                    data-driven digital marketing strategies. From SEO and
                    content marketing
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between gap-2 rounded-2xl bg-gray-300 p-8">
                <div className="flex-start mb-8 flex">
                  <div className="rounded-full bg-black p-4">
                    <BsPalette className="text-lg text-white" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-lg font-bold">Web Design</div>
                  <div className="text-base/5">
                    We specialize in creating visually stunning, user-friendly
                    websites that align with your brand identity and deliver an
                    exceptional
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between gap-2 rounded-2xl bg-gray-300 p-8">
                <div className="flex-start mb-8 flex">
                  <div className="rounded-full bg-black p-4">
                    <RiUserVoiceLine className="text-lg text-white" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-lg font-bold">IT Consulting</div>
                  <div className="text-base/5">
                    IT Consulting, or information technology consulting, refers
                    to the practice of providing advisory and implpementation
                    services
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between gap-2 rounded-2xl bg-gray-300 p-8">
                <div className="flex-start mb-8 flex">
                  <div className="rounded-full bg-black p-4">
                    <TbDiamondFilled className="text-lg text-white" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-lg font-bold">Brand Identity</div>
                  <div className="text-base/5">
                    It involves creating a unique and recognizable identity that
                    sets the brand apart from competitors and resonates with the
                    target audience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-second w-full">
        <div className="container mx-auto">
          <div className="flex justify-center pt-16 pb-8">
            <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2">
              <div className="flex justify-center lg:justify-end">
                <LayeredImage />
              </div>
              <div className="flex flex-col gap-6 px-6 text-white md:pr-12 lg:pr-24">
                <h1 className="text-xl font-bold text-emerald-500">About Us</h1>
                <div className="text-4xl font-bold md:text-5xl lg:text-6xl">
                  The core mission behind all our work
                </div>
                <div>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Repellat molestiae impedit pariatur cupiditate incidunt fugit
                  laborum enim dolor hic facere.
                </div>
                <div className="flex gap-12">
                  <div className="flex flex-col">
                    <div className="text-3xl font-bold text-emerald-500">
                      330 +
                    </div>
                    <div>Companies helped</div>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-3xl font-bold text-emerald-500">
                      230 +
                    </div>
                    <div>Revenue generated</div>
                  </div>
                </div>
                <Link href={"#"}>
                  <Button
                    variant="secondary"
                    className="rounded-l-full rounded-r-full"
                  >
                    Start your Free Trial
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center gap-4 py-16">
            <h1 className="text-3xl font-bold md:text-4xl">Testimonials</h1>
            <Carousel className="relative w-full px-4 sm:px-8 md:px-16 lg:px-40">
              <CarouselContent>
                <CarouselItem>
                  <Card className="bg-gray-200">
                    <CardContent className="flex flex-col items-center justify-center gap-2 px-8 pt-0 pb-12 text-center md:gap-4 md:px-24 md:pt-2">
                      <div className="size-[80px] overflow-hidden rounded-full bg-black md:size-[120px]">
                        <Image
                          src="/images/client-1.jpg"
                          alt="Client 1"
                          width={600}
                          height={600}
                          className="object-cover"
                        />
                      </div>
                      <div className="text-xl font-bold">
                        &quot;Game-changer for our business!&quot;
                      </div>
                      <div className="text-md md:text-lg">
                        &quot;Partnering with this agency was the best decision
                        we made. They didn&apos;t just design a website — they
                        gave us a platform that converted visitors into loyal
                        customers. We&apos;ve seen a 60% increase in leads
                        within the first 3 months!&quot;
                      </div>
                      <div>
                        <div className="font-bold">Jacqueline Miller</div>
                        <div>CEO of an eduport</div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="bg-gray-200">
                    <CardContent className="flex flex-col items-center justify-center gap-2 px-8 pt-0 pb-12 text-center md:gap-4 md:px-24 md:pt-2">
                      <div className="size-[80px] overflow-hidden rounded-full bg-black md:size-[120px]">
                        <Image
                          src="/images/client-2.jpg"
                          alt="Client 1"
                          width={600}
                          height={600}
                          className="object-cover"
                        />
                      </div>
                      <div className="text-xl font-bold">
                        &quot;They understood our vision better than we
                        did.&quot;
                      </div>
                      <div className="text-md md:text-lg">
                        &quot;From the very first meeting, the team instantly
                        grasped what we needed and translated it into a digital
                        experience that resonates with our audience. Our
                        business has never looked more professional or grown
                        this fast before.&quot;
                      </div>
                      <div>
                        <div className="font-bold">Aiden Warren</div>
                        <div>Founder of Urban Edge Apparel</div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="bg-gray-200">
                    <CardContent className="flex flex-col items-center justify-center gap-2 px-8 pt-0 pb-12 text-center md:gap-4 md:px-24 md:pt-2">
                      <div className="size-[80px] overflow-hidden rounded-full bg-black md:size-[120px]">
                        <Image
                          src="/images/client-3.jpg"
                          alt="Client 1"
                          width={600}
                          height={600}
                          className="object-cover"
                        />
                      </div>
                      <div className="text-xl font-bold">
                        &quot;Professional, responsive, and
                        results-driven.&quot;
                      </div>
                      <div className="text-md md:text-lg">
                        &quot;They treated our business like their own. Weekly
                        reports, constant communication, and most importantly —
                        measurable growth. We&apos;ve scaled operations by 2x in
                        under six months!&quot;
                      </div>
                      <div>
                        <div className="font-bold">William Frazier</div>
                        <div>Head Operations of Elevate Tech Solutions</div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <div className="absolute top-9/10 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
    </main>
  );
}
