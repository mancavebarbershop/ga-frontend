import { CheckIcon } from "lucide-react";

const tiers = [
  {
    name: "Class",
    id: "class-package",
    href: "#",
    priceMonthly: "$87",
    description: "For men who want & need to stay fresh",
    features: [
      "Unlimited Haircuts and Beard Trims",
      "Unlimited Laser Hair Removal",
      "Unlimited Teeth Whitening",
      "Unlimited Skin Treatment Facials",
      "Priotity Bookings - Skip the Wait",
      "Monthly Hair/Beard Product of Choice",
    ],
    frequency: "Yearly",
    pricingNotes: "Get 1 Month Free when paying yearly",
    buttonText: "Get Started Yearly",
    featured: true,
    buttonLink: "https://buy.stripe.com/fZe5ngfqf6ISg6IaEF",
  },
  {
    name: "Class",
    id: "silver-tier",
    href: "#",
    priceMonthly: "$95",
    description: "Unlimited Haircuts with Proirity Bookings",
    features: [
      "Unlimited Haircuts and Beard Trims",
      "Unlimited Laser Hair Removal",
      "Unlimited Teeth Whitening",
      "Unlimited Skin Treatment Facials",
      "Priotity Bookings - Skip the Wait",
      "Monthly Hair/Beard Product of Choice",
    ],
    frequency: "Monthly",
    pricingNotes: "",
    buttonText: "Get Started Monthly",
    mostPopular: false,
    buttonLink: "https://buy.stripe.com/aEUbLEgujebk5s4dQQ",
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function PricingSection() {
  return (
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
        <h2 className="text-base font-semibold leading-7 text-blue-800">
          Pricing
        </h2>
        <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Designed for Men who want & need to stay fresh
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
        Save time and money while getting the look you want.
        <br />
        Unlimited Mens Personal Grooming Services with Priority Bookings.
      </p>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 relative sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured
                ? "relative bg-gray-900 shadow-2xl"
                : "bg-white/60 sm:mx-8 lg:mx-0",
              tier.featured
                ? ""
                : tierIdx === 0
                ? "rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl"
                : "sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none",
              "rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10"
            )}
          >
            <span
              className={classNames(
                tier.frequency === "Yearly"
                  ? "text-white bg-primary absolute right-[56px] px-2 py-1 text-sm rounded-lg "
                  : "text-black border-[0.5px] border-gray-300  absolute right-[64px] px-2 py-1 text-sm rounded-lg "
              )}
            >
              {tier.frequency}
            </span>
            <h3
              id={tier.id}
              className={classNames(
                tier.featured ? "text-blue-500" : "text-blue-500",
                "text-base font-semibold leading-7"
              )}
            >
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className={classNames(
                  tier.featured ? "text-white" : "text-gray-900",
                  "text-5xl font-bold tracking-tight"
                )}
              >
                {tier.priceMonthly}
              </span>
              <span
                className={classNames(
                  tier.featured ? "text-gray-400" : "text-gray-500",
                  "text-base"
                )}
              >
                /month
              </span>
            </p>
            <span className={`text-gray-600`}>{tier.pricingNotes}</span>
            <p
              className={classNames(
                tier.featured ? "text-gray-300" : "text-gray-600",
                "mt-6 text-base leading-7"
              )}
            >
              {tier.description}
            </p>
            <ul
              role="list"
              className={classNames(
                tier.featured ? "text-gray-300" : "text-gray-600",
                "mt-8 space-y-3 text-sm leading-6 sm:mt-10"
              )}
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    className={classNames(
                      tier.featured ? "text-blue-300" : "text-blue-500",
                      "h-6 w-5 flex-none"
                    )}
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={tier.buttonLink}
              aria-describedby={tier.id}
              className={classNames(
                tier.featured
                  ? "bg-primary text-white shadow-sm hover:bg-blue-500 focus-visible:outline-blue-500"
                  : "text-blue-600 ring-1 ring-inset ring-blue-200 hover:ring-blue-500 focus-visible:outline-blue-600",
                "mt-8 block rounded-md py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10"
              )}
            >
              {tier.buttonText}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
