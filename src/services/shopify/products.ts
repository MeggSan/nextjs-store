import { shopifyUrls } from "./urls";
import { env } from "config/env";

export const getProducts = async () => {
  try {
    const response = await fetch(shopifyUrls.products.all, {
      headers: new Headers({
        "X-Shopify-Access-Token": env.SHOPIFY_TOKEN,
      }),
    });
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.log("error", error);
  }
};
