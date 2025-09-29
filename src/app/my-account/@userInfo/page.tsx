import { validateAccessToken } from "utils/auth/validateAccessToken";

export default async function MyAccountPage() {
  const customer = await validateAccessToken();

  if (!customer) {
    return <p>User not found</p>;
  }

  return (
    <div>
      <section>
        <h2>Your info</h2>
        <h1>Bienvenido {customer.firstName}</h1>
        <p>email: {customer.email}</p>
      </section>
    </div>
  );
}
