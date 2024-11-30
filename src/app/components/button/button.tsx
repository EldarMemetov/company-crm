"use client";

import React from "react";
import clsx from "clsx";
import styles from "./button.module.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

export default function Button({ disabled, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(styles.button, {
        [styles.disabled]: disabled,
        [styles.enabled]: !disabled,
      })}
    />
  );
}
