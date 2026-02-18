import { Assets } from "@/constants/assets";
import styles from "@/styles/components/BenefitsTable.module.css";
import { Box } from "@mui/material";
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
        <i className={styles.headerText}>
          <span className={styles.upgrade}>upgrade</span>
          <span>
            {" "}
            your benefits with
            <br />
          </span>
          <span className={styles.upgrade}> physical + virtual variant</span>
        </i>
        <Image
          src={Assets.rightIcon}
          alt="right_icon"
          width={24}
          height={24}
        />
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
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <b className={styles.virtualOnly}>virtual only</b>
          <div className={styles.frameItem} />
          <div className={styles.frameInner} />
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
          <div className={styles.div}>25%</div>
          <div className={styles.none}>none</div>
          <div className={styles.div2}>₹1,50,000</div>
          <div className={styles.free}>FREE</div>
          <div className={styles.div3}>37.5%</div>
          <div className={styles.yr}>12 / yr</div>
          <div className={styles.div4}>₹2,00,000</div>
          <div className={styles.gst}>₹500+GST</div>
          <div className={styles.lineDiv} />
          <div className={styles.frameChild2} />
          <div className={styles.frameChild3} />
        </div>
      </Box>
      <Box
        sx={{
          marginBottom: "100px",
        }}
      />
    </Box>
  );
}
