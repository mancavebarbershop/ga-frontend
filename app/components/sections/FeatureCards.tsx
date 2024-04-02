import Image from "next/image";
import { Button } from "../ui/button";
import qs from "qs";

type FeatureImageData = {
  url: string;
  alt: string;
};

type FeatureDetail = {
  id: number;
  heading: string;
  body: string;
  buttonText: string;
  secondaryButtonText?: string;
  featureImage: FeatureImageData;
};

type FeatureCardData = {
  id: number;
  heading: string;
  body?: string;
  buttonText?: string;
  buttonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  Feature?: FeatureDetail[];
};

interface FeatureCardsProps {
  data: FeatureCardData[];
}
export default function FeatureCards({ data }: FeatureCardsProps) {
  const normalizedData = Array.isArray(data) ? data : [data];
  return (
    <section className="px-4 py-12 lg:px-24">
      {normalizedData?.map((card: Partial<FeatureCardData>, i: number) => (
        <div className="flex flex-col w-full gap-2 mb-20" key={card.id || "1"}>
          {card.Feature &&
            card.Feature.map((feature: FeatureDetail, index: number) => (
              <div
                className={`flex flex-col lg:flex-row py-12 gap-24`}
                key={feature.heading}
              >
                <div
                  className={`w-full h-64 bg-white rounded-xl relative overflow-hidden ${
                    index % 2 === 0 ? "lg:order-0" : "lg:order-1"
                  }`}
                >
                  {feature.featureImage.url && (
                    <Image
                      src={`http://localhost:1337${feature.featureImage.url}`}
                      fill
                      style={{
                        objectFit: "cover",
                      }}
                      alt={feature.featureImage.alt}
                    />
                  )}
                </div>
                <div
                  className={`w-full flex flex-col justify-start items-start py-8 px-2 gap-5`}
                >
                  <h2>{feature.heading || "Heading"}</h2>
                  <p className="ml-0 max-w-[70%]">{feature.body || "Body"}</p>
                  <div className="flex flex-col justify-center items-center">
                    <Button variant="default">
                      {feature.buttonText || "button text"}
                    </Button>
                    {feature.secondaryButtonText && (
                      <button className="textButton">
                        <a>
                          {feature.secondaryButtonText ||
                            "Secondary Button Text"}
                        </a>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      ))}
    </section>
  );
}
