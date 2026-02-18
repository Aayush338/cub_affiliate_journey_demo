"use client";

import React, { useState } from "react";
import { Box } from "@mui/material";
import styles from "@/styles/components/CardSwitcher.module.css";

interface CardSwitcherProps {
  selected: 'physical' | 'virtual';
  onSelect: (type: 'physical' | 'virtual') => void;
}

export function CardSwitcher({ selected, onSelect }: CardSwitcherProps) {
  return (
    <Box sx={{ px: 2 }}>
      <Box
        sx={{
          marginTop: "286px",
        }}
      />
        <Box className={styles.switcher}>
          <Box
            className={selected === 'physical' ? styles.selectedVariantContainer : styles.inactiveVariantContainer}
            onClick={() => onSelect('physical')}
          >
            <p className={selected === 'physical' ? styles.selectedVariantTitle : styles.inactiveVariantText}>physical + virtual</p>
            <p className={selected === 'physical' ? styles.selectedVariantSubTitle : styles.inactiveVariantText}>
              ₹2L benefits at ₹500+GST
            </p>
          </Box>
          <Box
            className={selected === 'virtual' ? styles.selectedVariantContainer : styles.inactiveVariantContainer}
            onClick={() => onSelect('virtual')}
          >
            <p className={selected === 'virtual' ? styles.selectedVariantTitle : styles.inactiveVariantText}>virtual only</p>
            <p className={selected === 'virtual' ? styles.selectedVariantSubTitle : styles.inactiveVariantText}>
              ₹1.5L benefits at ₹0 fee
            </p>
          </Box>
        </Box>
    </Box>
  );
}
