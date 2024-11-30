import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { getSummaryCountries } from "../../../../lib/api";
import DashboardCard from "../../../components/dashboard-card/dashboard-card";
import styles from "./page.module.css";

export interface PageProps {}

export default async function Page({}: PageProps) {
  const data = await getSummaryCountries();

  return (
    <DashboardCard label="Countries of companies">
      <div className={styles.container}>
        <div className={styles.dataList}>
          {data.map(({ countryId, countryTitle, count }) => (
            <p
              key={countryId}
              className={clsx(styles.countryItem, "before:bg-purple-200")}
            >{`${countryTitle} - ${count}`}</p>
          ))}
        </div>
        <Image
          width={395}
          height={262}
          src="/images/world.svg"
          alt="world"
          className={styles.image}
        />
      </div>
    </DashboardCard>
  );
}
