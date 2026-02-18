import React from "react";
import styles from "@/styles/components/KeyDetailsTable.module.css";
import { Box } from "@mui/material";

const detailsData = [
  {
    title: "fee and others",
    items: [
      "this is a RUPAY Virtual only Card",
      "joining Fee - Not Applicable",
      "annual Fee (2nd Year Onwards) - Not Applicable",
    ],
  },
  {
    title: "fee and others",
    items: [
      "this is a RUPAY Virtual only Card",
      "joining Fee - Not Applicable",
      "annual Fee (2nd Year Onwards) - Not Applicable",
    ],
  },
  {
    title: "fee and others",
    items: [
      "this is a RUPAY Virtual only Card",
      "joining Fee - Not Applicable",
      "annual Fee (2nd Year Onwards) - Not Applicable",
    ],
  },
  {
    title: "fee and others",
    items: [
      "this is a RUPAY Virtual only Card",
      "joining Fee - Not Applicable",
      "annual Fee (2nd Year Onwards) - Not Applicable",
    ],
  },
];

export function KeyDetailsTable() {
  return (
    <Box className={styles.section}>
      <Box
        sx={{
          marginBottom: "64px",
        }}
      />
      <p className={styles.headerText}>key details</p>
      <Box
        sx={{
          marginBottom: "16px",
        }}
      />
      <Box className={styles.keyDetailsRow}>
        {detailsData.map((detail, index) => (
          <div key={index} className={styles.fee}>
            <div className={styles.feeAndOthersParent}>
              <div className={styles.feeAndOthers}>{detail.title}</div>
              <div className={styles.thisIsARupayVirtualOnlyCParent}>
                {detail.items.map((item, itemIndex) => (
                  <div key={itemIndex} className={styles.thisIsAContainer}>
                    <ul className={styles.thisIsARupayVirtualOnlyC}>
                      <li>{item}</li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Box>
    </Box>
  );
}
