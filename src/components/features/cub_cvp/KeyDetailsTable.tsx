import React from "react";
import styles from "@/styles/components/KeyDetailsTable.module.css";
import { Box } from "@mui/material";

const REWARDS_POLICY_URL = "https://www.salaryse.com/level-up-rewards-policy";

export function KeyDetailsTable() {
  return (
    <Box className={styles.section}>
      <Box sx={{ marginBottom: "64px" }} />
      <p className={styles.headerText}>key details</p>
      <Box sx={{ marginBottom: "16px" }} />
      <Box className={styles.keyDetailsRow}>
        {/* Fee and Others */}
        <div className={styles.card}>
          <div className={styles.topText}>fee and others</div>
          <ul className={styles.bulletList}>
            <li>This is a Physical + Virtual Card</li>
            <li>
              <b>joining Fee</b> - ₹500 + GST
            </li>
            <li>
              <b>annual Fee</b> (2nd Year Onwards) -<br />
              ₹500 + GST Waived with annual
              <br />
              spending of ₹2,00,000 or more.
            </li>
          </ul>
        </div>

        {/* Base Rewards */}
        <div className={styles.card}>
          <div className={styles.topText}>base rewards</div>
          <ul className={styles.bulletList}>
            <li>
              <b>earn 1 Reward Point (RP) per ₹100</b>
              <br />
              on transactions made on other UPI
              <br />
              Apps (not SalarySe UPI)
            </li>
            <li>
              for excluded categories and other
              <br />
              t&c{" "}
              <a href={REWARDS_POLICY_URL} className={styles.link}>
                click here
              </a>
            </li>
          </ul>
        </div>

        {/* Accelerated Rewards */}
        <div className={styles.card}>
          <div className={styles.topText}>accelerated rewards</div>
          <ul className={styles.bulletList}>
            <li>
              <b>earn 5 RP per ₹100</b> when your
              <br />
              monthly spend is below ₹20K
            </li>
            <li>
              applicable on SalarySe UPI, online
              <br />
              and offline checkout
            </li>
            <li>
              for excluded categories and t&c
              <br />
              <a href={REWARDS_POLICY_URL} className={styles.link}>
                click here
              </a>
            </li>
          </ul>
        </div>

        {/* Super Accelerated Rewards */}
        <div className={styles.card}>
          <div className={styles.topText}>
            <i className={styles.superText}>super</i> accelerated rewards
          </div>
          <ul className={styles.bulletList}>
            <li>
              <b>earn 10 RP per ₹100</b> when your
              <br />
              monthly spend is above ₹20,000
            </li>
            <li>
              applicable on SalarySe UPI, online
              <br />
              and offline checkout
            </li>
            <li>
              for excluded categories and t&c
              <br />
              <a href={REWARDS_POLICY_URL} className={styles.link}>
                click here
              </a>
            </li>
          </ul>
        </div>

        {/* Salary Day Bonus */}
        <div className={styles.card}>
          <div className={styles.topText}>Salary Day Bonus</div>
          <ul className={styles.bulletList}>
            <li>
              <b>earn 37.5 RP per ₹100</b> on
              <br />
              transactions made via SalarySe UPI
            </li>
            <li>
              applicable only on 1st and last day
              <br />
              of the month - max 5625 RP
            </li>
            <li>
              for details on this offer{" "}
              <a href={REWARDS_POLICY_URL} className={styles.link}>
                click here
              </a>
            </li>
          </ul>
        </div>

        {/* Lounge */}
        <div className={styles.card}>
          <div className={styles.topText}>lounge</div>
          <ul className={styles.bulletList}>
            <li>1 lounge access per month</li>
            <li>
              on minimum spend of ₹10,000 in
              <br />
              previous month
            </li>
            <li>
              to view all applicable lounges
              <br />
              <a href={REWARDS_POLICY_URL} className={styles.link}>
                click here
              </a>
            </li>
          </ul>
        </div>
      </Box>
    </Box>
  );
}
