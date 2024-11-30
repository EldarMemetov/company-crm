"use client";

import React from "react";
import Image from "next/image";
import SidebarItem from "../sidebar-item/sidebar-item";
import styles from "./sidebar.module.css";
import { usePathname, useRouter } from "next/navigation";

export interface SidebarProps {}

export default function Sidebar({}: SidebarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const handleClick = () => {
    router.push("/");
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.container}>
        <Image
          className={styles.logo}
          width={122}
          height={25}
          src="/icons/logo.svg"
          alt="logo"
        />
        <ul className={styles.menu}>
          <SidebarItem
            current={pathname === "/dashboard"}
            pathname="/dashboard"
            src="/icons/squares.svg"
            alt="dashboard icon"
          >
            Dashboard
          </SidebarItem>
          <SidebarItem
            current={pathname === "/companies"}
            pathname="/companies"
            src="/icons/briefcase.svg"
            alt="companies icon"
          >
            Companies
          </SidebarItem>
        </ul>
        <button className={styles.exitButton} onClick={handleClick}>
          <Image
            width={18}
            height={18}
            src="/icons/arrow-left-on-rectangle.svg"
            alt="exit icon"
          />
          <span className={styles.exitText}>Exit</span>
        </button>
      </div>
    </aside>
  );
}
