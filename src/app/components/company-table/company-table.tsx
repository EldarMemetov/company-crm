import React from "react";
import styles from "./company-table.module.css";

export interface CompanyTableProps {
  children?: React.ReactNode;
}

const headers = [
  "Category",
  "Company",
  "Status",
  "Promotion",
  "Country",
  "Joined date",
];

export default function CompanyTable({ children }: CompanyTableProps) {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th key={i} className={styles.headerCell}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
