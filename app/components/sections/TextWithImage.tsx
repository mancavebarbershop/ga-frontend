import Link from "next/link";
import { Button } from "../ui/button";

interface Data {
  heading: string;
  body: string;
  buttonLink: string;
  buttonText: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  imageSrc?: string;
  imageAlt?: string;
}

interface TextWithImageProps {
  data: Data[];
}

export default function TextWithImage({ data }: TextWithImageProps) {
  return (
    <section className="px-4 py-12">
      {data.map((card, i) => (
        <div className="flex flex-col w-full gap-2 mb-20" key={card.heading}>
          <div className={`w-full flex flex-col items-start py-8 px-2 gap-5`}>
            <h2>{card.heading}</h2>
            <p className="max-w-[85%]">{card.body}</p>
            <div className="flex flex-col items-start w-fit">
              <Button variant="secondary">
                <Link href={card.buttonLink}>{card.buttonText}</Link>
              </Button>
              {card.secondaryButtonText && (
                <a
                  className="text-gray-400 font-medium text-sm p-2"
                  href={card.secondaryButtonLink}
                >
                  {card.secondaryButtonText}
                </a>
              )}
            </div>
          </div>
          <div className="w-full h-64 bg-white rounded-xl relative"></div>
        </div>
      ))}
    </section>
  );
}
