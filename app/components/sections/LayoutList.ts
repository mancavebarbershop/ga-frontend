import Hero from "./Hero";
import CTA from "./CTA";
import FeatureCards from "./FeatureCards";
import CollapsibleContent from "./CollapsibleContent";

interface ComponentsMap {
  [key: string]: React.ComponentType<{ data: any }>; // Assuming all your components expect a prop named "data"
}

export const components: ComponentsMap = {
  hero: Hero,
  featurecards: FeatureCards,
  cta: CTA,
  collapsiblecontent: CollapsibleContent,
};
