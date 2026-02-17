import React from "react";
import styles from "@/styles/components/BonusSection.module.css";
import { Box } from "@mui/material";
import Text from "@/components/ui/Text";
import { Assets } from "@/constants/assets";
import Image from "next/image";

export function BonusSection() {
  return (
    <Box className={styles.section}>
      <Text className={styles.heading}>introducing</Text>
      <Box
        sx={{
          marginBottom: "16px",
        }}
      />
      <Text
        sx={{
          fontSize: "32px",
          lineHeight: "40px",
          fontWeight: "900",
          letterSpacing: "-0.64px",
          textAlign: "center",
        }}
        italic
      >
        Salary Day bonus
      </Text>
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
          src={Assets.cubSdb25}
          alt="cub_sdb_25"
          width={375}
          height={235}
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
