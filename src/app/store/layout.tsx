import Link from "next/link";
import { getCollections } from "services/shopify/collections";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const collections = await getCollections();

  return (
    <main>
      <nav>
        <ul>
          {collections.map((collection) => (
            <li key={collection.id}>
              <Link href={`/store/${collection.handle}`}>
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
