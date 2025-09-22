import { shopifyUrls } from "./urls";
import { env } from "config/env";
import { Collection, ProductType } from "../../../types";
import { transformProducts } from "./products";

export const getCollections = async () => {
  try {
    const response = await fetch(shopifyUrls.collections.all, {
      headers: new Headers({
        "X-Shopify-Access-Token": env.SHOPIFY_TOKEN,
      }),
    });
    const data = await response.json();
    const transformedCollections = data.smart_collections.map(
      (collection: Collection) => {
        return {
          id: collection.id,
          title: collection.title,
          handle: collection.handle,
        };
      }
    );
    return transformedCollections;
  } catch (error) {
    console.log("error", error);
  }
};

export const getCollectionProducts = async (
  id: string
): Promise<ProductType[]> => {
  try {
    const response = await fetch(shopifyUrls.collections.products(id), {
      headers: new Headers({
        "X-Shopify-Access-Token": env.SHOPIFY_TOKEN,
      }),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return transformProducts(data.products);
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};
