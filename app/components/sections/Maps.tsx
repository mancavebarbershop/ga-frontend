import { Button } from "../ui/button";
import React from "react";
import { IframeHTMLAttributes } from "@/app/types/iframeTypes";

export default function Maps({ data = {} }: any) {
  return (
    <section className="flex flex-col gap-8 items-center justify-center section-padding-g lg:flex-row">
      <div className="w-full flex flex-col gap-4 items-center justify-start">
        <h3>{data.heading || "Heading"}</h3>
        <p>{data.body || "Body"}</p>
        <div>
          <Button>{data.buttonText || "Button Text"}</Button>
        </div>
      </div>
      <div className="w-full rounded-xl overflow-hidden">
        <iframe
          width="100%"
          height="300"
          loading="lazy"
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=Grooming+Alchemist`}
        ></iframe>
      </div>
    </section>
  );
}
