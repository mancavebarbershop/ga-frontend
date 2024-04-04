import qs from "qs";
import { flattenAttributes } from "./utils";

const baseURL = process.env.STRAPI_BASE_URL;
const token = process.env.STRAPI_API_TOKEN;
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
      populate: "*",
    },
  },
});

export const getPageData = async (pageSlug: string) => {
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
          CTA: "*",
        },
      },
    },
  });
  try {
    const res = await fetch(`${baseURL}/api/${pageSlug}?${slugQuery}`, {
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
    console.error(`Something went wrong ${err}`);
  }
};

export const getSingleAsset = async (id: string) => {
  const res = await fetch(baseURL + `/files/${id}`);
  const data = res.json();
  return data;
};
