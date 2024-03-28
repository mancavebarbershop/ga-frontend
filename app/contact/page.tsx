import { getPageData } from "@/lib/strapi";
import { RenderLayout } from "@/lib/RenderLayout";
import ContactForm from "../components/ui/ContactForm";

export default async function Contact() {
  const data = await getPageData("contact");
  const layout = data.layout;
  return (
    <>
      <RenderLayout layout={layout} />
      <ContactForm />
    </>
  );
}
