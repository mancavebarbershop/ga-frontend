import qs from "qs";
import { flattenAttributes } from "@/lib/utils";
import { RenderLayout } from "@/lib/RenderLayout";

const baseURL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL;
const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
const options = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

const serviceQuery = qs.stringify({
  fields: ["title", "slug"],
  populate: {
    layout: {
      populate: {
        imageURL: {
          fields: ["url"],
        },
      },
    },
  },
});

const getPageData = async (slug: string) => {
  const serviceSlugQuery = qs.stringify({
    populate: {
      slug: {
        populate: true,
      },
      layout: {
        populate: "*",
      },
    },
    filters: {
      slug: {
        $eq: slug,
      },
    },
  });
  console.log(serviceSlugQuery);
  try {
    const res = await fetch(
      `http://localhost:1337/api/services?${serviceSlugQuery}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await res.json();
    const flatData = flattenAttributes(data);
    console.log("flatdata", flatData);
    return flatData;
  } catch (err) {
    console.log(err);
  }
};

export async function generateStaticParams() {
  const servicePages = await fetch("http://localhost:1337/api/services", {
    method: "GET",
    headers: {
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
  console.log(slug);
  const { data } = await getPageData(slug);
  const pageData = data[0];
  const layout = pageData.layout;
  console.log("layout", layout);
  // console.log(pageData.layout);
  // console.log(layout);
  return (
    <main>
      <RenderLayout layout={layout} />
    </main>
  );
}
