"use client";

import React from "react";
import Image from "next/image";
import { Box } from "@mui/material";
import { Assets } from "@/constants/assets";
import styles from "@/styles/components/TopBar.module.css";

export function TopBar() {
    return (
        <Box className={styles.topBar}>
            <Image
                src={Assets.salaryseNameLogo}
                alt="salaryse_name_logo"
                width={100}
                height={24}
                priority
            />
            <Image
                src={Assets.cubLogo}
                alt="Next.js logo"
                width={40}
                height={40}
                priority
            />
        </Box>
    );
}
