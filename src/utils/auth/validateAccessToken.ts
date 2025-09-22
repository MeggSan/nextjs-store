import { cookies } from "next/headers";
import { GraphQLClientSingleton } from "../../graphql";
import { customerName } from "../../graphql/queries/customerName";
import { CustomerNameResponse } from "../../../types";

export const validateAccessToken = async () => {
  const cookiesStore = cookies();
  const accessToken = cookiesStore.get("accessToken")?.value;
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient();

  const { customer } = await graphqlClient.request<CustomerNameResponse>(
    customerName,
    {
      customerAccessToken: accessToken,
    }
  );
  return customer;
};
