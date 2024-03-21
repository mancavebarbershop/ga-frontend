"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { ModeToggle } from "../ui/ModeToggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/app/components/ui/navigation-menu";
import { useState } from "react";

export default function FloatingNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <nav
      className={`fixed w-[80%] py-4 flex px-4 justify-between bg-neutral-950 rounded-xl bottom-[10vh] left-1/2 translate-x-[-50%] z-10 overflow-hidden transition-max-height duration-500 ease-in-out ${
        isOpen ? "h-[300px]" : "h-[72px]"
      }`}
    >
      <div
        className={`w-full flex-grow ${
          isOpen ? "translate-y-[-228px]" : "translate-y-0"
        }`}
      >
        {/* Your expandable content here */}
      </div>
      <div className="absolute bottom-0 w-full grid grid-cols-3 justify-center items-center pb-4 pt-2 bg-neutral-950 rounded-b-xl px-4 mx-auto">
        <Image
          src="/groomingLogo.png"
          width={80}
          height={40}
          alt="Grooming Alchemist Logo"
        />
        <button
          onClick={toggleMenu}
          className={`flex justify-center items-center${
            isOpen ? "bg-red-500" : "bg-slate-400"
          }`}
        >
          Menu
        </button>
        <div className="flex justify-center">
          <Button>
            <Link href="/subscribe">Subscribe</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
