import Link from "next/link";
import { validateAccessToken } from "utils/auth/validateAccessToken";
import styles from "./Header.module.sass";

export const Header = async () => {
  const customer = await validateAccessToken();

  return (
    <header>
      <nav>
        <ul className={styles.Header__list}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/store">Store</Link>
          </li>
        </ul>
        {customer?.firstName ? (
          <p className={styles.Header__welcome}>
            Welcome! {customer.firstName}
          </p>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </nav>
    </header>
  );
};
