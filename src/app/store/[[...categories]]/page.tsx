import { ProductsWrapper } from "components/Store/ProductsWrapper";
import { getProducts } from "services/shopify/products";
import { CategoriesProps } from "../../../../types";

export default async function Categories(props: CategoriesProps) {
  const { categories } = props.params;
  const products = await getProducts();

  return <ProductsWrapper products={products} />;
}
