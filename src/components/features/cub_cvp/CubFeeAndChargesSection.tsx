import { Assets } from "@/constants/assets";
import styles from "@/styles/components/CubFeeAndChargesSection.module.css";
import { Box } from "@mui/material";
import Image from "next/image";

export function CubFeeAndChargesSection() {
  return (
    <Box className={styles.section}>
      <Box
        sx={{
          marginBottom: "64px",
        }}
      />
      <i className={styles.headerText}>all these available at</i>
      <Box
        sx={{
          marginBottom: "16px",
        }}
      />
      <Box className={styles.firstYearContainerFrame}>
        <Box className={styles.containerHeading}>
          <Box>1st year</Box>
        </Box>
        <Box className={styles.feeRow}>
          <span className={styles.joiningFee}>joining fee</span>
          <Image
            src={Assets.cubRightArrowIcon}
            alt="cub_right_arrow_icon"
            width={16}
            height={16}
          />
          <p className={styles.gst}>
            <span className={styles.span}>₹500</span>
            <span className={styles.gst2}> + GST</span>
          </p>
        </Box>
      </Box>
      <Box
        sx={{
          marginBottom: "12px",
        }}
      />
      <Box className={styles.subsequentYearContainerFrame}>
        <Box className={styles.containerHeading}>
          <Box>2nd year onwards</Box>
        </Box>
        <Box className={styles.feeRow}>
          <div className={styles.inPreviousYearParent}>
            <span className={styles.inPreviousYear}>in previous year</span>
            <span className={styles.spend2Lac}>spend ₹2 lac</span>
          </div>
          <Image
            src={Assets.cubRightArrowIcon}
            alt="cub_right_arrow_icon"
            width={16}
            height={16}
          />
          <div className={styles.renewalFeeParent}>
            <span className={styles.inPreviousYear}>renewal fee</span>
            <span className={styles.waivedOff}>waived off</span>
          </div>
        </Box>
      </Box>
    </Box>
  );
}
