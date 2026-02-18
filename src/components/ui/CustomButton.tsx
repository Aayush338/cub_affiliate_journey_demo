"use client";

import React from "react";
import styles from "@/styles/components/CustomButton.module.css";

interface CustomButtonProps {
    label: string;
    onTap?: () => void;
    variant?: "primary";
    disabled?: boolean;
}

export function CustomButton({
    label,
    onTap,
    variant = "primary",
    disabled = false,
}: CustomButtonProps) {
    return (
        <button
            className={styles[variant]}
            onClick={onTap}
            disabled={disabled}
            type="button"
        >
            <span className={styles.text}>{label}</span>
        </button>
    );
}
