import React from "react";
import styles from "./styles.module.css";

export enum StatCardType {
  Dark = "dark",
  Gradient = "gradient",
}

export interface StatCardProps {
  type: StatCardType;
  label: string;
  counter: number;
}

export default function StatCard({ type, label, counter }: StatCardProps) {
  return (
    <div
      className={
        type === StatCardType.Dark
          ? `${styles.statCard} ${styles.statCardDark}`
          : `${styles.statCard} ${styles.statCardGradient}`
      }
    >
      <p
        className={
          type === StatCardType.Dark
            ? styles.statCardDarkLabel
            : styles.statCardGradientLabel
        }
      >
        {label}
      </p>
      <p className={styles.statCardCounter}>{counter}</p>
    </div>
  );
}
