import React from "react";
import styles from "./StatusLabel.module.css";
import clsx from "clsx";

export enum Status {
  Active = "active",
  NotActive = "notActive",
  Pending = "pending",
  Suspended = "suspended",
}

export interface StatusLabelProps {
  children: React.ReactNode;
  status: Status;
  disabled?: boolean;
}

export default function StatusLabel({
  children,
  status,
  disabled,
}: StatusLabelProps) {
  return (
    <div
      className={clsx(
        styles.container,
        status === Status.Active && styles.statusActive,
        status === Status.NotActive && styles.statusNotActive,
        status === Status.Pending && styles.statusPending,
        status === Status.Suspended && styles.statusSuspended,
        { [styles.disabled]: disabled },
      )}
    >
      {/* Индикатор состояния */}
      <div className={styles.indicator} />
      {/* Текст */}
      {children}
    </div>
  );
}
