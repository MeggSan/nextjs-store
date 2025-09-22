"use server";
import { createAccessToken } from "utils/auth/createAccessToken";
import { CustomerCreateResponse } from "../../types";
import { GraphQLClientSingleton } from "../graphql";
import { createUserMutation } from "../graphql/mutations/createUserMutation";
import { redirect } from "next/navigation";

export const handleCreateUser = async (formData: FormData) => {
  const formDataObject = Object.fromEntries(formData);
  delete formDataObject["password_confirmation"];
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient();
  const variables = {
    input: {
      ...formDataObject,
      phone: "+49" + formDataObject.phone,
    },
  };

  const { customerCreate } =
    await graphqlClient.request<CustomerCreateResponse>(
      createUserMutation,
      variables
    );
  const { customer } = customerCreate;
  if (customer?.firstName) {
    await createAccessToken(
      formDataObject.email as string,
      formDataObject.password as string
    );
  }
};

export const handleLogin = async (formData: FormData) => {
  const formDataObject = Object.fromEntries(formData);
  const accessToken = await createAccessToken(
    formDataObject.email as string,
    formDataObject.password as string
  );
  if (accessToken) {
    redirect("/store");
  }
};
