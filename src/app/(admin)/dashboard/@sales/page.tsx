import React from "react";
import { getSummarySales } from "../../../../lib/api";
import SummaryTable from "../../../components/summary-table/summary-table";
import SummaryTableHeader from "../../../components/summary-table-header/summary-table-header";
import SummaryTableCell from "../../../components/summary-table-cell/summary-table-cell";
import DashboardCard from "../../../components/dashboard-card/dashboard-card";
import styles from "./page.module.css";

export interface PageProps {}

export default async function Page({}: PageProps) {
  const data = await getSummarySales();

  return (
    <DashboardCard label="Sales details">
      <SummaryTable
        headers={
          <>
            <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader align="center">Sold</SummaryTableHeader>
            <SummaryTableHeader align="center">Income</SummaryTableHeader>
          </>
        }
      >
        {data.map(({ companyId, companyTitle, sold, income }) => (
          <tr key={companyId} className={styles.row}>
            <SummaryTableCell>{companyTitle}</SummaryTableCell>
            <SummaryTableCell align="center">{sold}</SummaryTableCell>
            <SummaryTableCell align="center">{`$${income}`}</SummaryTableCell>
          </tr>
        ))}
      </SummaryTable>
    </DashboardCard>
  );
}
