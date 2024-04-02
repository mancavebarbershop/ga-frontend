import Image from "next/image";
import { Button } from "../ui/button";

interface HeroData {
  heading: string;
  topHeading: string;
  body: string;
  buttonText: string;
  alignment?: string;
  imageURL?: { url: string; alt: string };
  imagePosition?: string;
}
interface HeroProps {
  data: Partial<HeroData>;
}

export default function Hero({ data = {} }: HeroProps) {
  console.log(data);
  return (
    <section className="flex flex-col px-4 py-20 gap-8 mx-auto">
      {data.imageURL?.url && (
        <div
          className={`w-full h-96 rounded-xl max-w-[720px] mx-auto relative overflow-hidden ${
            data.imagePosition === "below" ? "order-1" : null
          }`}
        >
          <Image
            src={"http://localhost:1337" + data.imageURL.url}
            alt="Image"
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      )}
      <div
        className={`w-full flex flex-col gap-8 text-${
          data.alignment || "center"
        }`}
      >
        <div>
          <span className="uppercase font-bold">
            {data.topHeading || "topHeading"}
          </span>
          <h1>{data.heading || "Heading"}</h1>
        </div>
        <p>{data.body || "Body Text"}</p>
        <div>
          <Button className="large">{data.buttonText || "buttonText"}</Button>
        </div>
      </div>
    </section>
  );
}
