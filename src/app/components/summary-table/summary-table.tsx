import React from "react";
import styles from "./summary-table.module.css";

export interface SummaryTableProps {
  headers: React.ReactNode;
  children?: React.ReactNode;
}

export default function SummaryTable({ headers, children }: SummaryTableProps) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody className={styles.body}>{children}</tbody>
    </table>
  );
}
