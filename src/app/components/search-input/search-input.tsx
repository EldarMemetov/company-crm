import React from "react";
import Image from "next/image";
import styles from "./search-input.module.css";

export interface SearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearchClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function SearchInput({
  onSearchClick,
  ...rest
}: SearchInputProps) {
  return (
    <div className={styles.container}>
      <input {...rest} type="text" className={styles.input} />
      <button type="button" className={styles.button} onClick={onSearchClick}>
        <Image
          width={20}
          height={20}
          src="/icons/magnifying-glass.svg"
          alt="search icon"
        />
      </button>
    </div>
  );
}
