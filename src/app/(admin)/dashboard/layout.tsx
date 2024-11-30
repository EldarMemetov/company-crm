import React from "react";
import styles from "./layout.module.css";

export interface LayoutProps {
  children: React.ReactNode;
  stats: React.ReactNode;
  sales: React.ReactNode;
  categories: React.ReactNode;
  countries: React.ReactNode;
  promotions: React.ReactNode;
}

export default function Layout({
  children,
  stats,
  sales,
  categories,
  countries,
  promotions,
}: LayoutProps) {
  return (
    <div>
      {children}
      <main className={styles.main}>
        <div className={styles.stats}>{stats}</div>
        <div className={styles.sales}>{sales}</div>
        <div className={styles.categories}>{categories}</div>
        <div className={styles.countries}>{countries}</div>
        <div className={styles.promotions}>{promotions}</div>
      </main>
    </div>
  );
}
