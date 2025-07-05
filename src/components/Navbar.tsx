'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`bg-none fixed w-full top-[-3px] z-10 px-5 transition-all ${
        scrolled ? 'shadow-sm shadow-black bg-white text-black py-3' : 'bg-transparent text-white py-6'
      }`}
    >
      <div className='container mx-auto flex justify-between px-12'>
        <Link
            href='/'
            className='text-lg font-bold'
          >
            ARIA
          </Link>
        <div className='flex items-center gap-8'>
          <Link
            href='/'
            className='hidden text-lg font-medium md:block'
          >
            Home
          </Link>
          <Link
            href='/about'
            className='hidden text-lg font-medium md:block'
          >
            About Us
          </Link>
          <Link
            href='/contact'
            className='hidden text-lg font-medium md:block'
          >
            Services
          </Link>
          <Link
            href='/contact'
            className='hidden text-lg font-medium md:block'
          >
            Blog List
          </Link>
          <Link
            href='/contact'
            className='hidden text-lg font-medium md:block'
          >
            <div className='flex items-center justify-center gap-1'>
              <FaUserCircle /> Sign In
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
