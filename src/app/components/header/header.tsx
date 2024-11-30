import React from "react";
import Image from "next/image";
import styles from "./header.module.css";

export interface HeaderProps {
  children: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{children}</h1>
      <div className={styles.divider} />
      <div className={styles.userInfo}>
        <Image width={44} height={44} src="/images/avatar.png" alt="avatar" />
        <div>
          <p className={styles.userName}>Adam Smith</p>
          <p className={styles.userEmail}>adamsmith@gmail.com</p>
        </div>
      </div>
    </header>
  );
}
