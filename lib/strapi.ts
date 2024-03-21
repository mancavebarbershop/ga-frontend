import qs from "qs";
import { flattenAttributes } from "./utils";

const baseURL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL;
const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
const options = {
  method: "GET",
  cache: "no-store",
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

const pageQuery = qs.stringify({
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

export const getPageData = async (slug: string) => {
  const slugQuery = qs.stringify({
    populate: {
      slug: {
        populate: true,
      },
      layout: {
        populate: "*",
      },
    },
  });
  const res = await fetch(`http://localhost:1337/api/${slug}?${slugQuery}`, {
    method: "GET",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  const flatData = flattenAttributes(data);
  return flatData;
};

export const getSingleAsset = async (id: string) => {
  const res = await fetch(baseURL + `/files/${id}`);
  const data = res.json();
  return data;
};
