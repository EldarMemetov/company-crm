import React from "react";
import clsx from "clsx";
import styles from "./status-label.module.css";

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
        styles.statusLabel,
        status === Status.Active && styles.statusActive,
        status === Status.NotActive && styles.statusNotActive,
        status === Status.Pending && styles.statusPending,
        status === Status.Suspended && styles.statusSuspended,
        { [styles.statusDisabled]: disabled },
      )}
    >
      <div className={styles.statusDot} />
      {children}
    </div>
  );
}
