import Link from 'next/link';
import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { HiOutlinePencilAlt } from 'react-icons/hi';

const page = () => {
  return (
    <main>
      <section className='bg-second min-h-[calc(100vh-80px-297px)] w-full'>
        <div className='container mx-auto p-4 text-white'>
          <div className='flex flex-col items-center my-16 gap-12 p-4 mx-0 lg:mx-20'>
            <div className='bg-gray-300 w-full flex flex-col gap-3 md:gap-6 justify-center items-center py-6 md:py-8 rounded-2xl'>
              <div className='text-black font-bold text-lg md:text-2xl mx-4 text-center'>
                Share Your Knowledge With Our Readers
              </div>
              <Link
                href={'#'}
                className='text-black border-black border-1 mx-8 px-5 md:px-6 py-1 md:py-2 rounded-md shadow-md'
              >
                <div className='flex gap-2 items-center'>
                  <HiOutlinePencilAlt />
                  Write Your Own Blog
                </div>
              </Link>
            </div>
            <div className='flex flex-row gap-12 justify-between w-full'>
              <div className='flex-3/4 flex flex-col gap-4'>
                <div className='font-bold text-lg'>Recently Posted Blog</div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                  {/* Card */}
                  <div className='flex flex-col gap-2'>
                    <div className='overflow-hidden rounded-md max-h-[240px] mb-1'>
                      <Image
                        src='/images/team-photo.jpg'
                        alt='Client 1'
                        width={600}
                        height={600}
                        className='object-cover'
                      />
                    </div>
                    <Badge className='bg-teal-300 text-black'>Technology</Badge>
                    <div className='font-bold text-xl'>
                      Set Video Playback Speed With Javascript
                    </div>
                    <div className='flex gap-2 items-center justify-between'>
                      <div className='flex gap-2 items-center'>
                        <div className='overflow-hidden rounded-full size-[30px]'>
                          <Image
                            src='/images/team-face-2.jpg'
                            alt='Client 1'
                            width={600}
                            height={600}
                            className='object-cover'
                          />
                        </div>
                        <div>Andrew</div>
                      </div>
                      <div className='relative flex flex-col h-full justify-center py-1'>
                        <div className='flex-grow border-l-2 border-white'></div>
                      </div>
                      <div>02 December 2022</div>
                      <div className='relative flex flex-col h-full justify-center py-1'>
                        <div className='flex-grow border-l-2 border-white'></div>
                      </div>
                      <div>3 Min. To Read</div>
                    </div>
                    <p>
                      Did you come here for something in particular or just
                      general Riker-bashing
                    </p>
                  </div>
                  {/* Card */}
                  <div className='flex flex-col gap-2'>
                    <div className='overflow-hidden rounded-md max-h-[240px] mb-1'>
                      <Image
                        src='/images/team-photo.jpg'
                        alt='Client 1'
                        width={600}
                        height={600}
                        className='object-cover'
                      />
                    </div>
                    <Badge className='bg-teal-300 text-black'>Technology</Badge>
                    <div className='font-bold text-xl'>
                      Set Video Playback Speed With Javascript
                    </div>
                    <div className='flex gap-2 items-center justify-between'>
                      <div className='flex gap-2 items-center'>
                        <div className='overflow-hidden rounded-full size-[30px]'>
                          <Image
                            src='/images/team-face-2.jpg'
                            alt='Client 1'
                            width={600}
                            height={600}
                            className='object-cover'
                          />
                        </div>
                        <div>Andrew</div>
                      </div>
                      <div className='relative flex flex-col h-full justify-center py-1'>
                        <div className='flex-grow border-l-2 border-white'></div>
                      </div>
                      <div>02 December 2022</div>
                      <div className='relative flex flex-col h-full justify-center py-1'>
                        <div className='flex-grow border-l-2 border-white'></div>
                      </div>
                      <div>3 Min. To Read</div>
                    </div>
                    <p>
                      Did you come here for something in particular or just
                      general Riker-bashing
                    </p>
                  </div>
                  {/* Card */}
                  <div className='flex flex-col gap-2'>
                    <div className='overflow-hidden rounded-md max-h-[240px] mb-1'>
                      <Image
                        src='/images/team-photo.jpg'
                        alt='Client 1'
                        width={600}
                        height={600}
                        className='object-cover'
                      />
                    </div>
                    <Badge className='bg-teal-300 text-black'>Technology</Badge>
                    <div className='font-bold text-xl'>
                      Set Video Playback Speed With Javascript
                    </div>
                    <div className='flex gap-2 items-center justify-between'>
                      <div className='flex gap-2 items-center'>
                        <div className='overflow-hidden rounded-full size-[30px]'>
                          <Image
                            src='/images/team-face-2.jpg'
                            alt='Client 1'
                            width={600}
                            height={600}
                            className='object-cover'
                          />
                        </div>
                        <div>Andrew</div>
                      </div>
                      <div className='relative flex flex-col h-full justify-center py-1'>
                        <div className='flex-grow border-l-2 border-white'></div>
                      </div>
                      <div>02 December 2022</div>
                      <div className='relative flex flex-col h-full justify-center py-1'>
                        <div className='flex-grow border-l-2 border-white'></div>
                      </div>
                      <div>3 Min. To Read</div>
                    </div>
                    <p>
                      Did you come here for something in particular or just
                      general Riker-bashing
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex-1/4 hidden xl:block'>
                <div className=' flex flex-col gap-12'>
                  <div className='flex flex-col gap-6 px-4'>
                    <div className='font-bold bg-teal-300 text-black px-2 py-1 mt-2 w-fit'>
                      Top Authors
                    </div>
                    <div className='flex flex-col gap-6'>
                      <div className='flex gap-4 items-center'>
                        <div className='bg-gray-300 rounded-full size-[50px]'></div>
                        <div className='flex flex-col gap-0'>
                          <div className='font-bold text-lg/4'>Jenny Kia</div>
                          <div className='text-base/4'>User</div>
                        </div>
                      </div>
                      <div className='flex gap-4 items-center'>
                        <div className='bg-gray-300 rounded-full size-[50px]'></div>
                        <div className='flex flex-col gap-0'>
                          <div className='font-bold text-lg/4'>
                            Adress Rasel
                          </div>
                          <div className='text-base/4'>User</div>
                        </div>
                      </div>
                      <div className='flex gap-4 items-center'>
                        <div className='bg-gray-300 rounded-full size-[50px]'></div>
                        <div className='flex flex-col gap-0'>
                          <div className='font-bold text-lg/4'>Andrew</div>
                          <div className='text-base/4'>User</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col gap-2 px-4'>
                    <div className='font-bold bg-teal-300 text-black px-2 py-1 w-fit'>
                      Categories
                    </div>
                    <ul>
                      <li className='border-b-2 py-2'>
                        <div className='flex justify-between'>
                          <div>Design</div>
                          <div>09</div>
                        </div>
                      </li>
                      <li className='border-b-2 py-2'>
                        <div className='flex justify-between'>
                          <div>Business</div>
                          <div>05</div>
                        </div>
                      </li>
                      <li className='border-b-2 py-2'>
                        <div className='flex justify-between'>
                          <div>Lifestyle</div>
                          <div>03</div>
                        </div>
                      </li>
                      <li className='border-b-2 py-2'>
                        <div className='flex justify-between'>
                          <div>Technology</div>
                          <div>10</div>
                        </div>
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

export default page;
