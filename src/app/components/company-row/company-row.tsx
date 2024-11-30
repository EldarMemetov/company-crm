import React from "react";
import Image from "next/image";
import clsx from "clsx";
import StatusLabel, {
  Status,
} from "../../components/status-label/status-label";
import styles from "./company-row.module.css";

export interface CompanyRowProps {
  id: number;
  category: string;
  company: string;
  status: Status;
  promotion: boolean;
  country: string;
  joinedDate: string;
}

const labelByStatus = {
  [Status.Active]: "Active",
  [Status.NotActive]: "Not Active",
  [Status.Pending]: "Pending",
  [Status.Suspended]: "Suspended",
};

export default function CompanyRow({
  id,
  category,
  company,
  status,
  promotion,
  country,
  joinedDate,
}: CompanyRowProps) {
  return (
    <tr className={styles.row}>
      <td className={styles.categoryCell}>{category}</td>
      <td>
        <a href={`/companies/${id}`}>{company}</a>
      </td>
      <td>
        <StatusLabel status={status}>{labelByStatus[status]}</StatusLabel>
      </td>
      <td>
        <div className={styles.promotionCell}>
          <Image
            width={16}
            height={16}
            src={`/icons/${promotion ? "check" : "x-mark"}.svg`}
            alt="promotion icon"
          />
          <span
            className={clsx(
              styles.promotionText,
              promotion ? styles.promotionYes : styles.promotionNo,
            )}
          >
            {promotion ? "Yes" : "No"}
          </span>
        </div>
      </td>
      <td>{country}</td>
      <td className={styles.roundedCell}>
        {new Date(joinedDate).toLocaleDateString("uk-UA")}
      </td>
    </tr>
  );
}
