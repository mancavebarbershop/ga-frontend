"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { handleContact } from "@/app/server/actions";

export default function ContactForm() {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    handleContact(formData);
  };
  return (
    <section className="section-padding-g">
      <form
        onSubmit={handleSubmit}
        className="w-[480px] mx-auto flex flex-col gap-2"
      >
        <Input className="bg-white" placeholder="Name" name="name" />
        <Input className="bg-white" placeholder="email" name="email" />
        <Textarea
          className="bg-white"
          placeholder="Your inquiry"
          name="inquiry"
        />
        <Button type="submit">Contact Us</Button>
      </form>
    </section>
  );
}
