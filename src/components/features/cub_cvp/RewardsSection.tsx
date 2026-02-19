import styles from "@/styles/components/RewardsSection.module.css";
import { Box } from "@mui/material";
import { Assets } from "@/constants/assets";
import Image from "next/image";

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
      <Box className={styles.rewardsRow}>
        <Box
          className={styles.fivePercentRewards}
          sx={{
            backgroundImage: `url(${Assets.cubRadialGradientTtm})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Box>
            <p className={styles.acceleratedRewards}>
              accelerated
              <br />
              rewards
            </p>
            <Box sx={{ marginBottom: "8px" }} />
            <p className={styles.spendsBelow20k}>spends below ₹20k</p>
          </Box>
          <Image
            src={Assets.cubFivePercentRewards}
            alt="5_percent_rewards"
            width={139}
            height={80}
          />
        </Box>
        <Box
          className={styles.fivePercentRewards}
          sx={{
            backgroundImage: `url(${Assets.cubRadialGradientMtb})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Box>
            <i className={styles.super}>super</i>
            <p className={styles.acceleratedRewards}>
              accelerated
              <br />
              rewards
            </p>
            <Box sx={{ marginBottom: "8px" }} />
            <p className={styles.spendsBelow20k}>spends above ₹20k</p>
          </Box>
          <Image
            src={Assets.cubTenPercentRewards}
            alt="10_percent_rewards"
            width={139}
            height={80}
          />
        </Box>
      </Box>
    </Box>
  );
}
