"use client";
import React from "react";
import { Field } from "formik";
import clsx from "clsx";
import styles from "./input-field.module.css";

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function InputField({ label, id, ...rest }: InputFieldProps) {
  return (
    <div className={styles.container}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <Field {...rest} id={id} className={clsx(styles.input, rest.className)} />
    </div>
  );
}
