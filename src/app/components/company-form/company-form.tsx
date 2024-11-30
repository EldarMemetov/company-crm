import React from "react";
import { Form, Formik } from "formik";
import Button from "../button/button";
import InputField from "../input-field/input-field";
import LogoUploader from "../logo-uploader/logo-uploader";
import styles from "./company-form.module.css";

export type CompanyFieldValues = {
  name: string;
  status: string;
  country: string;
  category: string;
  date: string;
  description: string;
};

const initialValues: CompanyFieldValues = {
  name: "",
  status: "",
  country: "",
  category: "",
  date: "",
  description: "",
};

export interface CompanyFormProps {
  onSubmit: (values: CompanyFieldValues) => void | Promise<void>;
}

export default function CompanyForm({ onSubmit }: CompanyFormProps) {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form className={styles.form}>
        <p className={styles.title}>Add new company</p>
        <div className={styles.fieldsWrapper}>
          <div className={styles.column}>
            <LogoUploader label="Logo" placeholder="Upload photo" />
            <InputField label="Status" placeholder="Status" name="status" />
            <InputField label="Country" placeholder="Country" name="country" />
          </div>
          <div className={styles.column}>
            <InputField label="Name" placeholder="Name" name="name" />
            <InputField
              label="Category"
              placeholder="Category"
              name="category"
            />
            <InputField label="Joined date" type="date" name="date" />
            <InputField
              label="Description"
              placeholder="Description"
              name="description"
            />
          </div>
        </div>
        <Button type="submit">Add company</Button>
      </Form>
    </Formik>
  );
}
