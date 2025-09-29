"use client";
import { useState } from "react";
import styles from "./NewAccountForm.module.sass";
import { handleCreateUser } from "actions";

export const NewAccountForm = () => {
  const [errors] = useState<string[]>([]);
  const [loading] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    await handleCreateUser(formData);
  };

  return (
    <div className={styles.NewAccountForm}>
      <h1 className={styles.NewAccountForm__title}>New Account</h1>
      <form className={styles.NewAccountForm__form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="Name"
          disabled={loading}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          disabled={loading}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          disabled={loading}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          pattern="^[0-9]*$"
          disabled={loading}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          disabled={loading}
        />
        <input
          type="password"
          name="password_confirmation"
          placeholder="Re-type Password"
          disabled={loading}
        />
        <input
          type="submit"
          name="submit"
          value="Create Account"
          disabled={loading}
        />
      </form>
      {errors.length > 0 && (
        <div>
          {errors.map((error, index) => {
            return (
              <p key={index} className={styles.NewAccountForm__error}>
                {error}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};
