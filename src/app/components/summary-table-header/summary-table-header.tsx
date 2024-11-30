import React from "react";
import clsx from "clsx";
import styles from "./summary-table-header.module.css";

export interface SummaryTableHeaderProps {
  align?: "left" | "center" | "right";
  children: React.ReactNode;
}

export default function SummaryTableHeader({
  align = "left",
  children,
}: SummaryTableHeaderProps) {
  return (
    <th
      className={clsx(
        styles.header,
        align === "left" && styles.alignLeft,
        align === "center" && styles.alignCenter,
        align === "right" && styles.alignRight,
        styles.firstChild,
        styles.secondChild,
        styles.thirdChild,
      )}
    >
      {children}
    </th>
  );
}
