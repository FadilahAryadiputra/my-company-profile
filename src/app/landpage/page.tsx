import Link from 'next/link';

import { Button } from '@/components/ui/button';

import LayeredImage from '@/components/LayeredImage';
import { BsPalette, BsVectorPen } from 'react-icons/bs';
import { RiUserVoiceLine } from 'react-icons/ri';
import { SlPencil } from 'react-icons/sl';
import { TbDiamondFilled, TbSpeakerphone } from 'react-icons/tb';

export default function Page() {
  return (
    <main>
      <section className='bg-second w-full'>
        <div className='container mx-auto py-4'>
          <div className='flex justify-between p-4 text-white min-h-screen'>
            <div className='mx-0 md:mx-10 my-20 flex items-center gap-2'>
              <div className='grid gap-4 px-10 md:grid-cols-2 md:gap-16'>
                <div className='flex flex-col justify-between'>
                  <div className='flex items-center'>
                    <div className='flex flex-col gap-6'>
                      <h1 className='font-bold text-5xl'>
                        Ready to take your Business Growth to the next level?
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ratione, minima vitae. Tenetur unde itaque tempore
                        nulla. Temporibus natus quam minima.
                      </p>
                      <Link href={'#'}>
                        <Button
                          variant='secondary'
                          className='rounded-l-full rounded-r-full'
                        >
                          Start your Free Trial
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className='flex flex-col py-6'>
                    <div>Trusted by Leading Brands</div>
                    <div className='flex gap-2'>
                      <div>Greenish</div>
                      <div>Automation</div>
                      <div>Leafe</div>
                      <div>Mindfulness</div>
                    </div>
                  </div>
                </div>
                <div className='flex items-center justify-center'>
                  <div className='border p-6 rounded-full'>
                    <div className='border p-6 rounded-full'>
                      <div className='bg-white rounded-full size-[220px] md:size-[280px] lg:size-[360px]'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-white w-full'>
        <div className='container mx-auto py-4'>
          <div className='flex flex-col items-center justify-center py-16 px-16  lg:px-32 gap-4 '>
            <h1 className='text-xl font-medium text-cyan-500'>Our Services</h1>
            <div className='text-3xl font-bold max-w-xs text-center'>
              High-impact services for your business
            </div>
            <div className='grid grid-cols-1 gap-12 mt-4 sm:grid-cols-2 md:grid-cols-3'>
              <div className='flex flex-col justify-between gap-2 p-8 bg-gray-300 rounded-2xl'>
                <div className='flex flex-start mb-8'>
                  <div className='bg-black rounded-full p-4'>
                    <SlPencil className='text-lg text-white' />
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='font-bold text-lg'>Content Marketing</div>
                  <div className='text-base/5'>
                    Our team creates engaging and shareable content that
                    resonates with your audiance, drives organic traffic
                  </div>
                </div>
              </div>
              <div className='flex flex-col justify-between gap-2 p-8 bg-gray-300 rounded-2xl'>
                <div className='flex flex-start mb-8'>
                  <div className='bg-black rounded-full p-4'>
                    <BsVectorPen className='text-lg text-white' />
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='font-bold text-lg'>Graphic Design</div>
                  <div className='text-base/5'>
                    Unlock the power of visual storytelling with our expert
                    graphic design service tailored to elevate your brand and
                    captivate
                  </div>
                </div>
              </div>
              <div className='flex flex-col justify-between gap-2 p-8 bg-gray-300 rounded-2xl'>
                <div className='flex flex-start mb-8'>
                  <div className='bg-black rounded-full p-4'>
                    <TbSpeakerphone className='text-lg text-white' />
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='font-bold text-lg'>Digital Marketing</div>
                  <div className='text-base/5'>
                    Elevate your brand&apos;s online presence with out data-driven
                    digital marketing strategies. From SEO and content marketing
                  </div>
                </div>
              </div>
              <div className='flex flex-col justify-between gap-2 p-8 bg-gray-300 rounded-2xl'>
                <div className='flex flex-start mb-8'>
                  <div className='bg-black rounded-full p-4'>
                    <BsPalette className='text-lg text-white' />
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='font-bold text-lg'>Web Design</div>
                  <div className='text-base/5'>
                    We specialize in creating visually stunning, user-friendly
                    websites that align with your brand identity and deliver an
                    exceptional
                  </div>
                </div>
              </div>
              <div className='flex flex-col justify-between gap-2 p-8 bg-gray-300 rounded-2xl'>
                <div className='flex flex-start mb-8'>
                  <div className='bg-black rounded-full p-4'>
                    <RiUserVoiceLine className='text-lg text-white' />
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='font-bold text-lg'>IT Consulting</div>
                  <div className='text-base/5'>
                    IT Consulting, or information technology consulting, refers
                    to the practice of providing advisory and implpementation
                    services
                  </div>
                </div>
              </div>
              <div className='flex flex-col justify-between gap-2 p-8 bg-gray-300 rounded-2xl'>
                <div className='flex flex-start mb-8'>
                  <div className='bg-black rounded-full p-4'>
                    <TbDiamondFilled className='text-lg text-white' />
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='font-bold text-lg'>Brand Identity</div>
                  <div className='text-base/5'>
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
      <section className='bg-second w-full'>
        <div className='container mx-auto'>
          <div className='flex justify-center pb-8 pt-16'>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 items-center'>
              <div className='flex justify-center lg:justify-end'>
                <LayeredImage />
              </div>
              <div className='flex flex-col gap-6 text-white px-6 md:pr-12 lg:pr-24'>
                <h1 className='font-bold text-xl text-emerald-500'>About Us</h1>
                <div className='font-bold text-4xl md:text-5xl lg:text-6xl'>
                  The core mission behind all our work
                </div>
                <div>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Repellat molestiae impedit pariatur cupiditate incidunt fugit
                  laborum enim dolor hic facere.
                </div>
                <div className='flex gap-12'>
                  <div className='flex flex-col'>
                    <div className='font-bold text-3xl text-emerald-500'>
                      330 +
                    </div>
                    <div>Companies helped</div>
                  </div>
                  <div className='flex flex-col'>
                    <div className='font-bold text-3xl text-emerald-500'>
                      230 +
                    </div>
                    <div>Revenue generated</div>
                  </div>
                </div>
                <Link href={'#'}>
                  <Button
                    variant='secondary'
                    className='rounded-l-full rounded-r-full'
                  >
                    Start your Free Trial
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
