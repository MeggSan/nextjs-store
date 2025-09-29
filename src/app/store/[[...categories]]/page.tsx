import { ProductsWrapper } from "components/Store/ProductsWrapper";
import { getProducts } from "services/shopify/products";
import { CategoriesProps, Collection, ProductType } from "../../../../types";
import {
  getCollectionProducts,
  getCollections,
} from "services/shopify/collections";

export const runtime = "edge";

export default async function Categories(props: CategoriesProps) {
  const { categories } = props.params;
  let products: ProductType[] = [];
  const collections = await getCollections();

  if (categories?.length > 0) {
    const selectedCollectionId = collections.find(
      (collection: Collection) => collection.handle === categories[0]
    ).id;
    products = await getCollectionProducts(selectedCollectionId);
  } else {
    products = await getProducts();
  }
  return <ProductsWrapper products={products} />;
}
