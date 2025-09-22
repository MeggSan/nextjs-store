import { cookies } from "next/headers";
import { GraphQLClientSingleton } from "../../graphql";
import { customerAccessTokenCreateMutation } from "../../graphql/mutations/customerAccessTokenCreate";
import { CustomerAccessTokenCreateResponse } from "../../../types";

export const createAccessToken = async (email: string, password: string) => {
  const cookiesStore = cookies();
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient();
  const { customerAccessTokenCreate } =
    await graphqlClient.request<CustomerAccessTokenCreateResponse>(
      customerAccessTokenCreateMutation,
      {
        email,
        password,
      }
    );
  const customerAccessToken = customerAccessTokenCreate?.customerAccessToken;
  if (customerAccessToken) {
    const { accessToken, expiresAt } = customerAccessToken;
    cookiesStore.set("accessToken", accessToken, {
      path: "/",
      expires: new Date(expiresAt),
      httpOnly: true,
      sameSite: "strict",
    });
  }
};
