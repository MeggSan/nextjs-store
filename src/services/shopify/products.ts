import { Product, ProductType } from "../../../types";
import { shopifyUrls } from "./urls";
import { env } from "config/env";

export const transformProducts = (products: Product[]): ProductType[] => {
  return products.map((product: Product) => ({
    id: product.id.toString(),
    gql_id: product.variants ? product.variants[0].admin_graphql_api_id : null,
    title: product.title,
    description: product.body_html,
    price: product.variants ? parseFloat(product.variants[0].price) : null,
    image: product.images[0].src,
    quantity: product.variants ? product.variants[0].inventory_quantity : null,
    handle: product.handle,
    tags: product.tags,
  }));
};

export const getProducts = async (): Promise<ProductType[]> => {
  try {
    const response = await fetch(shopifyUrls.products.all, {
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

export const getProduct = async (id: string): Promise<ProductType> => {
  try {
    const response = await fetch(`${shopifyUrls.products.all}?ids=${id}`, {
      headers: new Headers({
        "X-Shopify-Access-Token": env.SHOPIFY_TOKEN,
      }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    const transformedProducts = transformProducts(data.products);
    return transformedProducts[0];
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

export const getMainProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(shopifyUrls.products.mainProducts, {
      headers: new Headers({
        "X-Shopify-Access-Token": env.SHOPIFY_TOKEN,
      }),
      cache: "force-cache",
      next: {
        tags: ["main-products"],
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data.products;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};
