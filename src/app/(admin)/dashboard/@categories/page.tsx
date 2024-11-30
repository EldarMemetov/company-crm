import React from "react";
import { getSummaryCategories } from "../../../../lib/api";
import StatCard, {
  StatCardType,
} from "../../../components/stat-card/stat-card";
import DashboardCard from "../../../components/dashboard-card/dashboard-card";
import styles from "./page.module.css";

export interface PageProps {}

export default async function Page({}: PageProps) {
  const data = await getSummaryCategories();

  return (
    <DashboardCard label="Categories of companies">
      <div className={styles.grid}>
        {data.map(({ categoryId, categoryTitle, count }) => (
          <div key={categoryId} className={styles.card}>
            <StatCard
              type={StatCardType.Dark}
              label={categoryTitle}
              counter={count}
            />
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}
