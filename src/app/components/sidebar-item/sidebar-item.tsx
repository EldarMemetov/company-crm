import React from "react";
import Image from "next/image";
import styles from "./sidebar-item.module.css";
import Link from "next/link";
import clsx from "clsx"; // Для управления классами

export interface SidebarItemProps {
  current?: boolean; // Флаг активности
  pathname: string;
  src: string;
  alt: string;
  children: React.ReactNode;
}

export default function SidebarItem({
  current,
  pathname,
  src,
  alt,
  children,
}: SidebarItemProps) {
  return (
    <li>
      <Link
        href={pathname}
        className={clsx(
          styles.item, // Основной стиль
          current && styles.current, // Добавляем стиль, если элемент активен
        )}
      >
        <Image
          className={styles.icon}
          width={18}
          height={18}
          src={src}
          alt={alt}
        />
        <span className={styles.text}>{children}</span>
      </Link>
    </li>
  );
}
