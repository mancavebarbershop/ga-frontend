import qs from "qs";
import { flattenAttributes } from "@/lib/utils";
import { RenderLayout } from "@/lib/RenderLayout";
import { notFound } from "next/navigation";

const baseURL = process.env.STRAPI_BASE_URL;
const token = process.env.STRAPI_API_TOKEN;

const getPageData = async (pageSlug: string) => {
  const slugQuery = qs.stringify({
    populate: {
      layout: {
        populate: {
          imageURL: {
            populate: "*",
          },
          Feature: {
            populate: "*",
          },
        },
      },
    },
    filters: {
      slug: {
        $eq: pageSlug,
      },
    },
  });
  try {
    const res = await fetch(`${baseURL}/api/services?${slugQuery}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    const flatData = flattenAttributes(data);
    return flatData;
  } catch (err) {
    console.log(err);
  }
};

export async function generateStaticParams() {
  const servicePages = await fetch(`${baseURL}/api/services`, {
    method: "GET",

    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await servicePages.json();
  const flattenedData = flattenAttributes(data);
  const pagesData = flattenedData.data;
  return pagesData.map((page: any) => ({ slug: page.slug }));
}

export default async function ServicesPage({ params }: any) {
  const slug = params.service;
  const data = await getPageData(slug);
  const { data: flatData } = await flattenAttributes(data);
  if (!flatData[0]) {
    notFound();
  }
  const pageData = flatData[0];
  const layout = pageData.layout;
  return (
    <main>
      <RenderLayout layout={layout} />
    </main>
  );
}
