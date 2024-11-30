import React from "react";
import Sidebar from "../components/sidebar/sidebar";
import styles from "./layout.module.css";

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className={styles.sidebarWrapper}>
        <Sidebar />
      </div>
      <div className={styles.layoutContent}>{children}</div>
    </>
  );
}
