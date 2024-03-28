import Hero from "../components/sections/Hero";
import PricingCard from "../components/sections/PricingCard";
import FeatureCards from "../components/sections/FeatureCards";
import { getPageData } from "@/lib/strapi";
import { RenderLayout } from "@/lib/RenderLayout";
import CollapsibleContent from "../components/sections/CollapsibleContent";
import PricingSection from "../components/sections/PricingSection";

export default async function Subscribe() {
  const { layout: data } = await getPageData("subscribe");
  return (
    <div>
      <RenderLayout layout={data} key={data} />
      <PricingSection />
    </div>
  );
}
