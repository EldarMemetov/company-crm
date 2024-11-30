import React from "react";
import { getSummaryStats } from "../../../../lib/api";
import StatCard, {
  StatCardType,
} from "../../../components/stat-card/stat-card";
import styles from "./page.module.css";

export interface PageProps {}

const labelByStat = {
  promotions: "Total promotions",
  categories: "Total categories",
  newCompanies: "New companies",
  activeCompanies: "Total active companies",
};

export default async function Page({}: PageProps) {
  const data = await getSummaryStats();

  return (
    <div className={styles.grid}>
      {(Object.keys(labelByStat) as (keyof typeof data)[]).map((key) => (
        <div key={key} className={styles.card}>
          <StatCard
            type={StatCardType.Gradient}
            label={labelByStat[key]}
            counter={data[key]}
          />
        </div>
      ))}
    </div>
  );
}
