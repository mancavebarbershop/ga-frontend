import { Button } from "../ui/button";

interface FeatureCardsData {
  heading: string;
  i: number;
  id: number;
  body?: string;
  buttonText?: string;
  buttonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  imageURL?: string;
  Feature?: FeatureDetail[];
}

interface FeatureDetail {
  id: number;
  heading: string;
  body: string;
  buttonText: string;
  secondaryButtonText?: string | null;
}

interface FeatureCardsProps {
  data: Partial<FeatureCardsData> | Partial<FeatureCardsData>[];
}

export default function FeatureCards({ data = [] }: FeatureCardsProps) {
  const normalizedData = Array.isArray(data) ? data : [data];

  return (
    <section className="px-4 py-12 lg:px-24">
      {normalizedData.map((card: Partial<FeatureCardsData>, i: number) => (
        <div className="flex flex-col w-full gap-2 mb-20" key={card.id || "1"}>
          {card.Feature &&
            card.Feature.map((feature, index) => (
              <div
                className={`flex flex-col lg:flex-row py-12 gap-24`}
                key={feature.heading}
              >
                <div
                  className={`w-full h-64 bg-white rounded-xl relative ${
                    index % 2 === 0 ? "lg:order-0" : "lg:order-1"
                  }`}
                >
                  {/* <img src="" alt="" /> */}
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
