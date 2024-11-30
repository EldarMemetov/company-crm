import React from "react";
import clsx from "clsx";
import styles from "./summary-table-cell.module.css";

export interface SummaryTableCellProps {
  align?: "left" | "center" | "right";
  children: React.ReactNode;
}

export default function SummaryTableCell({
  align = "left",
  children,
}: SummaryTableCellProps) {
  return (
    <td
      className={clsx(
        styles.cell,
        align === "left" && styles.alignLeft,
        align === "center" && styles.alignCenter,
        align === "right" && styles.alignRight,
      )}
    >
      {children}
    </td>
  );
}
