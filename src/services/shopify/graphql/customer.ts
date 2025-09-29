import { cookies } from "next/headers";
import { Edge, Order, OrdersResponse } from "../../../../types";
import { GraphQLClientSingleton } from "../../../graphql";
import { getOrdersQuery } from "../../../graphql/queries/getOrders";

export const getCustomerOrders = async () => {
  const cookiesStorage = cookies();
  const accessToken = cookiesStorage.get("accessToken")?.value || "";
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient();
  const variables = {
    customerAccessToken: accessToken,
  };

  const { customer } = await graphqlClient.request<OrdersResponse>(
    getOrdersQuery,
    variables
  );
  const orders = customer?.orders?.edges.map((edge: Edge<Order>) => edge.node);
  return {
    totalOrders: customer?.orders?.totalCount,
    orders,
  };
};
