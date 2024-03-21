import { Button } from "../ui/button";

interface CTAData {
  heading?: string;
  body?: string;
  buttonText?: string;
  buttonLink?: string;
}

interface CTAProps {
  data: CTAData;
}

export default function CTA({ data }: CTAProps) {
  return (
    <section className="section-padding-g text-center flex flex-col gap-4">
      <h2>{data?.heading || "CTA Heading"} </h2>
      <p>{data?.body || "CTA Body"}</p>
      <div className="">
        <Button>{data?.buttonText || "Button Text"}</Button>
      </div>
    </section>
  );
}
