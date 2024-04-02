import { RenderLayout } from "@/lib/RenderLayout";
import { getPageData } from "@/lib/strapi";
export default async function About() {
  const { layout: data } = await getPageData("about");
  return (
    <main>
      <RenderLayout layout={data} />
    </main>
  );
}
