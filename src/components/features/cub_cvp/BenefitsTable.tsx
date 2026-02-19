import { Assets } from "@/constants/assets";
import styles from "@/styles/components/BenefitsTable.module.css";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

interface BenefitsTableProps {
  selected: "physical" | "virtual";
  onSelect: (type: "physical" | "virtual") => void;
}

export function BenefitsTable({ selected, onSelect }: BenefitsTableProps) {
  const handleToggle = () => {
    onSelect(selected === "physical" ? "virtual" : "physical");
  };

  return (
    <Box className={styles.section}>
      <Box
        sx={{
          marginBottom: "64px",
        }}
      />
      <Box className={styles.headerRow} onClick={handleToggle}>
        {selected === "physical" ? (
          <i className={styles.headerText}>
            <span className={styles.upgrade}>upgrade</span>
            <span>
              {" "}
              your benefits with
              <br />
            </span>
            <span className={styles.upgrade}> physical + virtual variant</span>
          </i>
        ) : (
          <i className={styles.headerText}>
            <span>looking for </span>
            <span className={styles.upgrade}>
              lifetime free credit
              <br />
            </span>
            <span className={styles.upgrade}>card </span>
            <span>switch to </span>
            <span className={styles.upgrade}>virtual only</span>
          </i>
        )}
        <Image src={Assets.rightIcon} alt="right_icon" width={24} height={24} />
      </Box>
      <Box
        sx={{
          marginBottom: "16px",
        }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box className={styles.tableFrame}>
          <Box className={styles.tableHeading} />
          <b className={styles.virtualOnly}>virtual only</b>
          <Box className={styles.frameItem} />
          <Box className={styles.frameInner} />
          <b className={styles.benefits}>benefits</b>
          <b className={styles.physicalVirtual}>physical + virtual</b>
          <b className={styles.salaryDayBonus}>Salary Day Bonus</b>
          <b className={styles.domesticLounge}>
            domestic
            <br />
            lounge
          </b>
          <b className={styles.annualSavings}>annual savings</b>
          <b className={styles.annualFees}>annual fees</b>
          <Box className={styles.div}>25%</Box>
          <Box className={styles.none}>none</Box>
          <Box className={styles.div2}>₹1,50,000</Box>
          <Box className={styles.free}>FREE</Box>
          <Box className={styles.div3}>37.5%</Box>
          <Box className={styles.yr}>12 / yr</Box>
          <Box className={styles.div4}>₹2,00,000</Box>
          <Box className={styles.gst}>₹500+GST</Box>
          <Box className={styles.lineDiv} />
          <Box className={styles.frameChild2} />
          <Box className={styles.frameChild3} />
        </Box>
      </Box>
      <Box
        sx={{
          marginBottom: "100px",
        }}
      />
    </Box>
  );
}
