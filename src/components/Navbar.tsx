"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuthStore } from "@/stores/auth";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const { user, clearAuth } = useAuthStore();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-[-3px] z-10 w-full bg-none px-0 md:px-5 transition-all ${
        scrolled
          ? "bg-white py-3 text-black shadow-sm shadow-black"
          : "bg-transparent py-6 text-white"
      }`}
    >
      <div className="container mx-auto flex justify-between px-12">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold">
          <div className="size-[50px] overflow-hidden">
            <Image
              src="/images/logo.png"
              alt="company-logo"
              width={600}
              height={600}
              className="object-cover"
            />
          </div>
          ARIA
        </Link>
        <div className="flex items-center gap-8">
          <Link href="/" className="hidden text-lg font-medium lg:block hover:underline decoration-2 underline-offset-4">
            Home
          </Link>
          <Link
            href="/about-us"
            className="hidden text-lg font-medium md:block hover:underline decoration-2 underline-offset-4"
          >
            About Us
          </Link>
          <Link href="/teams" className="hidden text-lg font-medium md:block hover:underline decoration-2 underline-offset-4">
            Teams
          </Link>
          <Link
            href="/services"
            className="hidden text-lg font-medium md:block hover:underline decoration-2 underline-offset-4"
          >
            Services
          </Link>
          <Link href="/blogs" className="hidden text-lg font-medium md:block hover:underline decoration-2 underline-offset-4">
            Blog List
          </Link>
          {user ? (
            <>
              <Button
                variant="destructive"
                onClick={clearAuth}
                className="hidden md:block"
              >
                <div className="flex items-center justify-center gap-1">
                  <FaUserCircle /> Sign Out
                </div>
              </Button>
            </>
          ) : (
            <>
              <Link
                href="/sign-in"
                className="hidden text-lg font-medium md:block"
              >
                <div className="flex items-center justify-center gap-1">
                  <FaUserCircle /> Sign In
                </div>
              </Link>
            </>
          )}
          <div className="block md:hidden">
            <div className="flex items-center justify-center active:border-none active:outline-none">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <GiHamburgerMenu className="cursor-pointer text-xl active:border-none" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href="/">Home</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/about-us">About</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/teams">Teams</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/services">Services</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/blogs">Blogs</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    {user ? (
                      <Button
                        variant="destructive"
                        onClick={clearAuth}
                        className="w-full"
                      >
                        Sign Out
                      </Button>
                    ) : (
                      <Link href="/sign-in">Sign In</Link>
                    )}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
