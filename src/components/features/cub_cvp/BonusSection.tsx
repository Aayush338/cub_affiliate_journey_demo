import React from "react";
import styles from "@/styles/components/BonusSection.module.css";
import { Box } from "@mui/material";
import { Assets } from "@/constants/assets";
import Image from "next/image";

interface BonusSectionProps {
  selected: "physical" | "virtual";
}

export function BonusSection({ selected }: BonusSectionProps) {
  return (
    <Box className={styles.section}>
      <p className={styles.heading}>introducing</p>
      <Box
        sx={{
          marginBottom: "16px",
        }}
      />
      <i className={styles.headerText}>Salary Day Bonus</i>
      <Box
        sx={{
          marginBottom: "8px",
        }}
      />
      <p className={styles.stAndLast}>1st and last day of month earn</p>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image
          src={selected === "physical" ? Assets.cubSdb375 : Assets.cubSdb25}
          alt="cub_sdb_25"
          width={1000}
          height={235}
          style={{ width: "100%", height: "auto" }}
          priority
        />
      </Box>
      <Box
        sx={{
          marginBottom: "64px",
        }}
      />
    </Box>
  );
}
