import styles from "@/styles/components/TravelingRewardSection.module.css";
import { Box } from "@mui/material";
import { Assets } from "@/constants/assets";
import Image from "next/image";

export function TravelingRewardsSection() {
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
            level UP
            <br />
          </span>
          <span>your </span>
          <span className={styles.travelingExperience}>travelling experience</span>
        </i>
      </Box>
      <Box sx={{ marginBottom: "16px" }} />
      <Box className={styles.rewardsRow}>
        <Box
          className={styles.travelingRewards}
          sx={{
            backgroundImage: `url(${Assets.cubGradientMtb})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Box>
            <p className={styles.travelRewardsText}>
              12 lounge
              <br />
              access
            </p>
            <Box sx={{ marginBottom: "8px" }} />
            <p className={styles.travelRewardsSubText}>
              each unlocks monthly
              <br />
              at ₹10K/month spend
            </p>
          </Box>
          <Box sx={{ position: "absolute", bottom: -32, right: -16, width: 160, height: 160 }}>
            <Image
              src={Assets.cub12Lounge}
              alt="12_lounge"
              width={160}
              height={160}
            />
          </Box>
        </Box>
        <Box
          className={styles.travelingRewards}
          sx={{
            backgroundImage: `url(${Assets.cubGradientTtm})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Box>
            <p className={styles.travelRewardsText}>
              1%
              <br />
              forex
            </p>
            <Box sx={{ marginBottom: "8px" }} />
            <p className={styles.travelRewardsSubText}>
              save more on every
              <br />
              global transaction
            </p>
          </Box>
          <Box sx={{ position: "absolute", bottom: -32, right: -16, width: 160, height: 160 }}>
            <Image
              src={Assets.cub1percentForex}
              alt="1_percent_forex"
              width={160}
              height={160}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
