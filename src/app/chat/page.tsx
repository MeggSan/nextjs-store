import { getProducts } from "services/shopify/products";
import { Chat } from "../../components/chat/Chat";
import { createAgent } from "utils/openai/createAgent";

export default async function ChatPage() {
  const products = await getProducts();
  const productTitles = products.map((product) => product.title);
  const flatProductTitles = productTitles.join("\n");
  const agent = createAgent(flatProductTitles);

  return (
    <>
      <h1>Chat bot</h1>
      <Chat agent={agent} />
    </>
  );
}
