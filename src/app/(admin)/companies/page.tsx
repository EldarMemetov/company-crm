import React from "react";
import Header from "../../components/header/header";
import Toolbar from "../../components/toolbar/toolbar";
import SearchInput from "../../components/search-input/search-input";
import AddCompanyButton from "../../components/add-company-button/add-company-button";
import CompanyTable from "../../components/company-table/company-table";
import CompanyRow from "../../components/company-row/company-row";
import { Status } from "../../components/status-label/status-label";

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <>
      <Header>Companies</Header>
      <main>
        <Toolbar action={<AddCompanyButton />}>
          <SearchInput />
        </Toolbar>
        <CompanyTable>
          <CompanyRow
            id={1}
            category="Products"
            company="Costco"
            status={Status.Pending}
            promotion={true}
            country="USA"
            joinedDate="02.19.2023"
          />
        </CompanyTable>
      </main>
    </>
  );
}
