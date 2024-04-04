import { Button } from "../ui/button";
import cn from "classnames";

type CTAData = {
  heading?: string;
  body?: string;
  buttonText?: string;
  buttonLink?: string;
  alignment?: string;
};

interface CTAProps {
  data: Partial<CTAData>;
}

export default function CTA({ data = {} }: CTAProps) {
  console.log(data);
  // let alignmentPosition = data?.alignment || "center";
  return (
    <section className={cn(`section-padding-g container flex flex-col gap-4`)}>
      <h2>{data?.heading || "CTA Heading"} </h2>
      <p>{data?.body || "CTA Body"}</p>
      <div className="">
        <Button>{data?.buttonText || "Button Text"}</Button>
      </div>
    </section>
  );
}
