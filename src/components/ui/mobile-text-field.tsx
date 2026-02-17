"use client";

import React, { forwardRef } from "react";
import Image from "next/image";
import { TextField, InputAdornment, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Assets } from "@/constants/assets";

export interface MobileTextFieldProps {
    label?: string;
    error?: string;
    helperText?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: string;
    className?: string;
}

const MobileTextField = forwardRef<HTMLInputElement, MobileTextFieldProps>(
    (
        { label, error, helperText, className, ...props },
        ref,
    ) => {
        return (
            <TextField
                fullWidth
                label={label}
                error={!!error}
                helperText={error || helperText}
                variant="outlined"
                sx={{
                    "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                        paddingLeft: "11px",
                        backgroundColor: "transparent",
                        "& fieldset": {
                            border: "1px solid #FFFFFF",
                        },
                        "&:hover fieldset": {
                            borderColor: "#FFFFFF",
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: "#FFFFFF",
                            borderWidth: "1px",
                        },
                    },
                    "& .MuiInputBase-input": {
                        padding: "16px 16px",
                        color: "#FFF",
                        fontSize: "16px",
                        fontWeight: 400,
                        lineHeight: "24px",
                        letterSpacing: "0.32px",
                        "&::placeholder": {
                            color: "rgba(255, 255, 255, 0.4)",
                            opacity: 1,
                        },
                    },
                    "& .MuiInputLabel-root": {
                        color: "#FFF !important",
                        fontFamily: "Noto Sans",
                        fontSize: "12px",
                        fontWeight: 400,
                        lineHeight: "16px",
                        letterSpacing: "-0.24px",
                        transform: "translate(14px, -8px) scale(1)",
                    },
                    "& .MuiFormHelperText-root": {
                        color: error ? "#ef4444" : "rgba(255, 255, 255, 0.4)",
                        marginLeft: "0",
                        marginTop: "4px",
                    },
                    ...((className as any)?.sx || {}),
                }}
                className={className}
                slotProps={{
                    input: {
                        inputRef: ref,
                        startAdornment: (
                            <InputAdornment position="start">
                                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                    <Image
                                        src={Assets.indianFlag}
                                        alt="indian flag"
                                        width={24}
                                        height={24}
                                        style={{ borderRadius: "40px" }}
                                    />
                                    <Box
                                        component="span"
                                        sx={{
                                            color: "#FFF",
                                            fontSize: "16px",
                                            fontWeight: 400,
                                            lineHeight: "24px",
                                            letterSpacing: "0.32px",
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        +91 |
                                    </Box>
                                </Box>
                            </InputAdornment>
                        ),
                    },
                    htmlInput: {
                        inputMode: "numeric",
                        pattern: "[0-9]*",
                        maxLength: 10,
                    },
                }}
                {...props}
            />
        );
    },
);

MobileTextField.displayName = "MobileTextField";

export { MobileTextField };
