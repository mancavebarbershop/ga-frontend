import Image from "next/image";
import TextWithImage from "./components/sections/TextWithImage";
import { Button } from "@/app/components/ui/button";
import { getPageData } from "@/lib/strapi";
import { RenderLayout } from "@/lib/RenderLayout";

export default async function Home() {
  const data = await getPageData("home");

  const layout = data.layout;

  return <RenderLayout layout={layout} />;
}
