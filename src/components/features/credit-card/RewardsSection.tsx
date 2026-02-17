import React from "react";
import styles from "@/styles/components/RewardsSection.module.css";
import { Box } from "@mui/material";

export function RewardsSection() {
  return (
    <Box className={styles.section}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <i className={styles.headerText}>
          <span>
            and on all
            <br />
          </span>
          <span className={styles.otherDaysOf}>other days of month</span>
          <span> enjoy</span>
        </i>
      </Box>
      <Box sx={{ marginBottom: "16px" }} />
    </Box>
  );
}
