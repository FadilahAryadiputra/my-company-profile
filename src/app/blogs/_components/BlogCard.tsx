import { Badge } from '@/components/ui/badge';
import { Blog } from '@/types/blog';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: FC<BlogCardProps> = ({ blog }) => {
  return (
    <Link href={`/blogs/${blog.objectId}`}>
      {/* Card */}
      <div className='flex flex-col gap-2'>
        <div className='overflow-hidden rounded-md max-h-[240px] mb-1'>
          <Image
            src={blog.thumbnail}
            alt='Client 1'
            width={600}
            height={600}
            className='object-cover'
          />
        </div>
        <Badge className='bg-teal-300 text-black'>{blog.category}</Badge>
        <div className='font-bold text-xl'>{blog.title}</div>
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
          <div className='relative flex flex-col h-[30px] justify-center py-1'>
            <div className='flex-grow border-l-2 border-white'></div>
          </div>
          <div>{format(new Date(blog.created), 'dd MMM yyyy')}</div>
          <div className='relative flex flex-col h-[30px] justify-center py-1'>
            <div className='flex-grow border-l-2 border-white'></div>
          </div>
          <div>3 Min. To Read</div>
        </div>
        <p>{blog.description}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
