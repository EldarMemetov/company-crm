import React from "react";
import styles from "./dashboard-card.module.css";

export interface DashboardCardProps {
  label: React.ReactNode;
  children: React.ReactNode;
}

export default function DashboardCard({ label, children }: DashboardCardProps) {
  return (
    <div className={styles.card}>
      <p className={styles.label}>{label}</p>
      <div>{children}</div>
    </div>
  );
}
