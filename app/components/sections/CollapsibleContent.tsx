import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface CollapsibleContentData {
  heading?: string;
  content?: string;
  collapsibleContent?: [
    {
      heading?: string;
      content?: string;
    }
  ];
}

interface CollapisibleContentProps {
  data: CollapsibleContentData[];
}
export default function CollapsibleContent({
  data = [],
}: CollapisibleContentProps) {
  const contents = Array.isArray(data) ? data : [data];
  const collapsibleContent = contents[0].collapsibleContent;
  return (
    <section className="section-padding-g">
      {collapsibleContent?.map((content, index) => {
        return (
          <Accordion
            type="single"
            collapsible
            className="max-w-[600px] mx-auto my-4"
            key={index}
          >
            <AccordionItem
              value={`item-${index}`}
              className="border-[1px] px-4 rounded-xl"
            >
              <AccordionTrigger>
                {content.heading || "Heading"}
              </AccordionTrigger>
              <AccordionContent>
                {content.content || "Content"}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        );
      })}
    </section>
  );
}
