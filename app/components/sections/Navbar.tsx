"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { ResponsiveNav } from "../ui/responsive-nav";

const components: { title: string; slug: string }[] = [
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
    slug: "/haircut",
  },
  {
    title: "Men's Facials",
    slug: "/facials",
  },
];

export default function Navbar() {
 
  return <ResponsiveNav />;
}
