import { ProductView } from "components/product/ProductView";
import { getProduct } from "services/shopify/products";

interface ProductPageProps {
  searchParams: {
    id: string;
  };
}

export default async function ProductPage({ searchParams }: ProductPageProps) {
  const id = searchParams.id;
  const product = await getProduct(id);

  return <ProductView product={product} />;
}
