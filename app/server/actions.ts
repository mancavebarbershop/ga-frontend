"use server";
import { createRecord } from "@/lib/airtable";
import { redirect } from "next/navigation";
// import { redirect } from "next/navigation";
export const handleContact = async (formData: any) => {
  await createRecord("Inquiries", formData);
  redirect("/thank-you");
};
