// components/LayeredImage.js
import Image from 'next/image';

const LayeredImage = () => {
  return (
    <div className='relative size-[260px] md:size-[360px] xl:size-[500px]'>
      {/* Backmost Layer */}
      <div className='absolute top-0 left-0 z-0 size-[200px] md:size-[300px] xl:size-[440px]'>
        <Image
          src='/images/team-photo.jpg'
          alt='Team Layer 1'
          width={600}
          height={600}
          className='rounded-xl opacity-20'
        />
      </div>

      {/* Middle Layer */}
      <div className='absolute top-6 left-6 z-2 size-[200px] md:size-[300px] xl:size-[440px]'>
        <Image
          src='/images/team-photo.jpg'
          alt='Team Layer 2'
          width={600}
          height={600}
          className='rounded-xl opacity-50'
        />
      </div>

      {/* Top Layer */}
      <div className='absolute top-12 left-12 z-4 size-[200px] md:size-[300px] xl:size-[440px]'>
        <Image
          src='/images/team-photo.jpg'
          alt='Team Top Layer'
          width={600}
          height={600}
          className='rounded-xl'
        />
      </div>
    </div>
  );
};

export default LayeredImage;
