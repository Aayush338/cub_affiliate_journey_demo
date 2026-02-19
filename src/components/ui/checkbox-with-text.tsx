"use client";

import React from "react";
import { Checkbox, Box, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import Text from "@/components/ui/Text";

export interface CheckboxWithTextProps {
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    text: string;
    linkText?: string;
    linkHref?: string;
    textAfterLink?: string;
    className?: string;
    width?: number | string;
    height?: number | string;
}

const StyledCheckbox = styled(Checkbox, {
    shouldForwardProp: (prop) => prop !== "boxWidth" && prop !== "boxHeight",
})<{ boxWidth?: number | string; boxHeight?: number | string }>(({ boxWidth, boxHeight }) => ({
    color: "rgba(255, 255, 255, 0.4)",
    padding: 0,
    "&.Mui-checked": {
        color: "#EEFF41",
    },
    "&.Mui-checked .MuiSvgIcon-root": {
        border: "none",
    },
}));

const CheckboxWithText: React.FC<CheckboxWithTextProps> = ({
    checked,
    onChange,
    text,
    linkText,
    linkHref,
    textAfterLink,
    className,
    width = 15,
    height = 15,
}) => {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: "4px",
                ...((className as any)?.sx || {}),
            }}
            className={className}
        >
            <StyledCheckbox
                checked={checked}
                onChange={onChange}
                boxWidth={width}
                boxHeight={height}
            />
            <p
            style={{
                fontSize: "10px",
                lineHeight: "14px",
                color: "#fff",
                letterSpacing: "-0.02em",
                textAlign: "left"
            }}
            >
                {text}{" "}
                {linkText && linkHref && (
                    <Link
                        href={linkHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            color: "white",
                            textDecoration: "underline",
                            "&:hover": {
                                opacity: 0.8,
                            },
                        }}
                    >
                        {linkText}
                    </Link>
                )}
                {textAfterLink && ` ${textAfterLink}`}
            </p>
        </Box>
    );
};

export { CheckboxWithText };
