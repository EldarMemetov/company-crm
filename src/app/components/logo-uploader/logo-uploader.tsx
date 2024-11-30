"use client";
import React, { useState } from "react";
import Image from "next/image";

import styles from "./logo-uploader.module.css";

export interface LogoUploaderProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

export default function LogoUploader({
  label,
  placeholder,
  id,
  ...rest
}: LogoUploaderProps) {
  // Состояние для хранения выбранного файла
  const [file, setFile] = useState<File | null>(null);

  // Функция для обработки изменения файла
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile); // Обновляем состояние
    }
  };

  return (
    <div className={styles.container}>
      {label && <p className={styles.label}>{label}</p>}

      <label htmlFor={id} className={styles.uploadLabel}>
        {/* Показываем иконку загрузки, если файл не выбран */}
        {!file ? (
          <Image
            className={styles.icon}
            width={48}
            height={48}
            src="icons/upload.svg"
            alt="upload"
          />
        ) : (
          // Показываем превью изображения, если файл выбран
          <Image
            className={styles.icon}
            width={48}
            height={48}
            src={URL.createObjectURL(file)} // Используем URL.createObjectURL для создания временного URL
            alt="preview"
          />
        )}

        {placeholder && <p className={styles.placeholder}>{placeholder}</p>}

        {/* Инпут для загрузки файла */}
        <input
          {...rest}
          id={id}
          type="file"
          accept="image/*"
          className={styles.hiddenInput}
          onChange={handleFileChange} // Обработчик изменения файла
        />
      </label>

      {/* Если файл выбран, отображаем его имя или дополнительные действия */}
      {file && <p>{file.name}</p>}
    </div>
  );
}
