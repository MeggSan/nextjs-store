import { shopifyUrls } from "./urls";
import { env } from "config/env";
import { Collection } from "../../../types";

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
