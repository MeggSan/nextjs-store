"use client";

import { useEffect } from "react";
import styles from "./error.module.sass";
import { ErrorProps } from "../../../types";

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.log("error", error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.Error}>
      <h1>Error!</h1>
      <p>Something happened.</p>
      <button onClick={reset}>Retry</button>
    </div>
  );
}
