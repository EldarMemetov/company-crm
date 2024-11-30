import React from "react";
import styles from "./toolbar.module.css";

export interface ToolbarProps {
  children: React.ReactNode;
  action?: React.ReactNode;
}

export default function Toolbar({ children, action }: ToolbarProps) {
  return (
    <div className={styles.toolbar}>
      <div className={styles.content}>{children}</div>
      {action}
    </div>
  );
}
