/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/CowzfwdSDEY
 */
"use client";
import Link from "next/link";
import NavDrawer from "./NavDrawer";
import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const servicesMenu = [
  {
    title: "Teeth Whitening",
    slug: "/teeth-whitening",
  },
  {
    title: "Laser Hair Removal",
    slug: "/laser-hair-removal",
  },
  {
    title: "Men's Haircuts",
    slug: "/mens-haircuts",
  },
  {
    title: "Men's Facials",
    slug: "/facials",
  },
];

const navMenu = [
  {
    title: "Home",
    slug: "/",
  },
  {
    title: "Teeth Whitening",
    slug: "/teeth-whitening",
  },
  {
    title: "Laser Hair Removal",
    slug: "/laser-hair-removal",
  },
  {
    title: "Men's Haircuts",
    slug: "/mens-haircuts",
  },
  {
    title: "Men's Facials",
    slug: "/facials",
  },
  {
    title: "Contact",
    slug: "/contact",
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
export function ResponsiveNav() {
  return (
    <div className="flex justify-between container h-auto py-4">
      <Link className="flex items-center gap-2" href="/">
        <Image
          src="/groomingLogo.png"
          width={80}
          height={40}
          alt="Grooming Alchemist Logo"
        />
      </Link>
      {/* MOBILE MENU */}
      <div
        className={classNames(
          "flex items-center justify-center gap-2 md:hidden"
        )}
      >
        <NavDrawer pages={servicesMenu} />
        <Link href="/subscribe">
          <Button variant="default">Subscribe</Button>
        </Link>
      </div>
      <div
        className={classNames(
          "hidden md:flex items-center justify-center gap-8"
        )}
      >
        <DropdownMenu>
          <DropdownMenuTrigger className="text-white flex items-center gap-2">
            Services
            <ChevronDown size={16} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {servicesMenu.map((menu) => (
              <Link href={menu.slug} key={menu.slug} className="text-white">
                <DropdownMenuItem>{menu.title}</DropdownMenuItem>
              </Link>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
