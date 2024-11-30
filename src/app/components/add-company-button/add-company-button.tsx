"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Button from "../button/button";

// Динамический импорт компонента CompanyFormModal с отключением SSR
const CompanyFormModal = dynamic(
  () => import("../company-form-modal/company-form-modal"),
  {
    ssr: false,
  },
);

export default function AddCompanyButton() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button onClick={() => setShow(true)}>Add Company</Button>
      <CompanyFormModal
        onSubmit={console.log}
        show={show}
        onClose={() => setShow(false)}
      />
    </>
  );
}
