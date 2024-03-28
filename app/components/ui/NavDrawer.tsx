"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./button";
import Link from "next/link";

type PagesProp = {
  pages: {
    title: string;
    slug: string;
  }[];
};
export default function NavDrawer({ pages }: PagesProp) {
  return (
    <Drawer>
      <DrawerTrigger className="flex text-base ">
        <Button>Services</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Explore our services</DrawerTitle>
          <DrawerDescription>Located in Edmondson Park 2174</DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-col gap-4 justify-center items-center max-w-[200px] w-full mx-auto">
          {pages.map((page) => (
            <div className="w-64" key={page.title}>
              <Link href={page.slug} className="w-64">
                <DrawerClose>
                  <Button variant="secondary" className="w-64">
                    {page.title}
                  </Button>
                </DrawerClose>
              </Link>
            </div>
          ))}
        </div>
        <DrawerFooter className="mx-auto">
          <a
            href="/subscribe"
            className="w-96 flex justify-center items-center"
          >
            <DrawerClose className="flex justify-center items-center">
              <Button className="mx-auto w-full">
                Get Unlimited Services{" "}
              </Button>
            </DrawerClose>
          </a>

          <DrawerClose>
            <Button variant="outline">Go back</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
