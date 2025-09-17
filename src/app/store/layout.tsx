import Link from "next/link";
import { getCollections } from "services/shopify/collections";
import styles from "./StoreLayout.module.sass";
import { Collection } from "../../../types";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const collections = await getCollections();

  return (
    <main className={styles.StoreLayout}>
      <h1>Explore</h1>
      <nav>
        <ul className={styles.StoreLayout__list}>
          {collections.map((collection: Collection) => (
            <li key={collection.id} className={styles.StoreLayout__chip}>
              <Link
                href={`/store/${collection.handle}`}
                className={styles.StoreLayout__chipText}
              >
                {collection.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {children}
    </main>
  );
}
