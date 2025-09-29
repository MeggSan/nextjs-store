import { validateAccessToken } from "utils/auth/validateAccessToken";

export const dynamic = "force-dynamic";

export default async function MyAccountPage() {
  const customer = await validateAccessToken();

  if (!customer) {
    return <p>User not found</p>;
  }

  return (
    <div>
      <section>
        <h2>Account info</h2>
        <h1>Welcome: {customer.firstName}</h1>
        <p>email: {customer.email}</p>
      </section>
    </div>
  );
}
