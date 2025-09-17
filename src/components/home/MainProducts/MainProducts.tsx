import Image from "next/image";
import { Product } from "../../../../types";
import { getProducts } from "services/shopify/products";
import styles from "./MainProducts.module.sass";

export const MainProducts = async () => {
  const response = await fetch("http://localhost:3000/api");
  const { products } = await response.json();

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
