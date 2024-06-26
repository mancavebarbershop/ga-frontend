import qs from "qs";
import { flattenAttributes } from "@/lib/utils";
import { RenderLayout } from "@/lib/RenderLayout";
import { notFound } from "next/navigation";

const baseURL = process.env.STRAPI_BASE_URL;
const token = process.env.STRAPI_API_TOKEN;

const getPageData = async (pageSlug: string) => {
  const slugQuery = qs.stringify({
    populate: {
      seo: {
        slug: true,
      },
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
      seo: {
        slug: {
          $eq: pageSlug,
        },
      },
    },
  });
  try {
    const fetchURL = `${baseURL}/api/services?${slugQuery}`;
    const res = await fetch(fetchURL, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    console.log(data);
    const flatData = flattenAttributes(data);
    return flatData;
  } catch (err) {
    console.log(err);
  }
};

export async function generateStaticParams() {
  try {
    const servicePages = await fetch(`${baseURL}/api/services`, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await servicePages.json();
    const flattenedData = flattenAttributes(data);
    const pagesData = flattenedData.data;
    return pagesData.map((page: any) => ({ slug: page.slug }));
  } catch (err) {
    console.log("Something went wrong with Generate Static Params", err);
    notFound();
  }
}

export default async function ServicesPage({ params }: any) {
  const slug = params.service;
  console.log(slug);
  try {
    const data = await getPageData(slug);
    console.log(slug, data);
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
  } catch (err) {
    console.log(err);
    notFound();
  }
}
