import Image from "next/image";
import { Product } from "../../../../../types";
import styles from "./MainProducts.module.sass";

const getProducts = async () => {
  try {
    const response = await fetch(
      `${process.env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`,
      {
        headers: new Headers({
          "X-Shopify-Access-Token": process.env.SHOPIFY_API_KEY || "",
        }),
      }
    );
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.log("error", error);
  }
};

export const MainProducts = async () => {
  const products = await getProducts();

  return (
    <section className={styles.MainProducts}>
      <h3>✨ New Products released!</h3>
      <div className={styles.MainProducts__grid}>
        {products.map((product: Product) => {
          const imgSrc = product.images[0].src;
          return (
            <article key={product.id}>
              <p>{product.title}</p>
              <Image
                src={imgSrc}
                fill
                alt={product.title}
                loading="eager"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </article>
          );
        })}
      </div>
    </section>
  );
};
