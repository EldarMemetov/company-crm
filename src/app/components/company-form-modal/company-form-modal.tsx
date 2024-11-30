"use client";

import React from "react";
import CompanyForm, { CompanyFormProps } from "../company-form/company-form";
import Modal, { ModalProps } from "../modal/modal";

export interface CompanyFormModalProps extends ModalProps {
  onSubmit: CompanyFormProps["onSubmit"];
}

export default function CompanyFormModal({
  onSubmit,
  ...rest
}: CompanyFormModalProps) {
  return (
    <Modal {...rest}>
      <CompanyForm onSubmit={onSubmit} />
    </Modal>
  );
}
