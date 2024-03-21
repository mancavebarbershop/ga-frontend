import Image from "next/image";
import TextWithImage from "./components/sections/TextWithImage";
import { Button } from "@/app/components/ui/button";

export default async function Home() {
  const featureCardsData = [
    {
      heading: "Men's Haircuts and Beards",
      body: "Our barbers listen, take their time and make sure you get the haircut you want",
      buttonText: "Book now",
      buttonLink: "/subscribe",
      secondaryButtonText: "",
      secondaryButtonLink: "",
    },
    {
      heading: "Laser Hair Removal",
      body: "Stop hair from growing in the wrong places. Keep your body clean and save time with our Laser Hair Removal, working with our beauty specialists for Men's Grooming",
      buttonText: "Get for Free",
      buttonLink: "/subscribe",
      secondaryButtonText: "Book now",
      secondaryButtonLink: "/laser-hair-removal/book",
    },
    {
      heading: "Teeth Whitening",
      body: "Lift your smile with our safe & enamel friendly whitening process",
      buttonText: "Get for Free",
      buttonLink: "/subscribe",
      secondaryButtonText: "Book now",
      secondaryButtonLink: "/teeth-whitening/book",
    },
  ];

  return (
    <main>
      <section className="flex flex-col px-4 py-12 gap-8">
        <div className="w-full h-64 bg-white rounded-xl"></div>
        <div className="w-full flex flex-col gap-4">
          <div>
            <span className="uppercase font-bold">Grooming Alchemist</span>
            <h1>Men&apos;s Personal Grooming and Haircuts</h1>
          </div>
          <p className="">
            Get personalised haircuts from barbers who care. Freshen and
            maintain your physical apperance.
          </p>
          <Button variant="default" className="bg-primary">
            Get Fresh Now
          </Button>
        </div>
      </section>
      <TextWithImage data={featureCardsData} />
      {/* <section>
        <div className="w-full h-64">
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            referrerpolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_API}
          &q=Grooming+Alchemist+Edmondson+Park`}
          ></iframe>
        </div>
      </section> */}
    </main>
  );
}
