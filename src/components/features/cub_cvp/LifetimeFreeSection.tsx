import { Assets } from "@/constants/assets";
import styles from "@/styles/components/LifetimeFreeSection.module.css";
import { Box } from "@mui/material";
import Image from "next/image";

export function LifetimeFreeSection() {
  return (
    <Box className={styles.section}>
      <Box
        sx={{
          marginBottom: "64px",
        }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <i className={styles.headerText}>
          <span>
            all these available at
            <br />
          </span>
          <span className={styles.annualFee}>₹0 annual fee</span>
        </i>
      </Box>
      <Box
        sx={{
          marginBottom: "8px",
        }}
      />
      <Image
        src={Assets.cubLifetimeFree}
        alt="cub_lifetime_free"
        width={1000}
        height={185}
        style={{
          width: "100%",
          height: "auto",
        //   margin: "0px 16px"
        }}
      />
    </Box>
  );
}
