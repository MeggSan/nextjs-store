import { ProductView } from "components/product/ProductView";
import { redirect } from "next/navigation";
import { getProduct } from "services/shopify/products";

interface ProductPageProps {
  searchParams: {
    id: string;
  };
}

export async function generateMetadata({ searchParams }: ProductPageProps) {
  const id = searchParams.id;
  const product = await getProduct(id);

  return {
    title: product.title,
    description: product.description,
    keywords: product.tags,
    openGraph: {
      images: [product.image],
    },
  };
}

export default async function ProductPage({ searchParams }: ProductPageProps) {
  const id = searchParams.id;
  const product = await getProduct(id);

  if (!id) {
    redirect("/store");
  }

  return <ProductView product={product} />;
}
