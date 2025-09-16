"use client";
import Image from "next/image";
import { ErrorProps } from "../../types";
import styles from "../sass/global-error.module.sass";

export default function GlobalError({ reset }: ErrorProps) {
  return (
    <main className={styles.Error}>
      <h1 className={styles.Error__title}>Error!</h1>
      <Image src="/images/error.png" width={500} height={500} alt="Error" />
      <p className={styles.Error__message}>An error has happened.</p>
      <button className={styles.Error__button} onClick={reset}>
        Retry
      </button>
    </main>
  );
}
