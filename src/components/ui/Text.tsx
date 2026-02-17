import React from "react";
import { Typography, TypographyProps } from "@mui/material";

type TextVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "b1"
  | "b1Black"
  | "b2"
  | "b2Black"
  | "b3"
  | "b3Bold"
  | "b4"
  | "e1"
  | "e2"
  | "cta1"
  | "cta2";

interface TextProps extends Omit<TypographyProps, "variant" | "className"> {
  children: React.ReactNode;
  variant?: TextVariant;
  className?: string;
  italic?: boolean;
  as?: React.ElementType;
}

const variantStyles: Record<TextVariant, string> = {
  h1: "text-mobile-h1 md:text-h1 font-black tracking-tight-2 uppercase",
  h2: "text-mobile-h2 md:text-h2 font-black tracking-tight-2 uppercase",
  h3: "text-mobile-h3 md:text-h3 font-black tracking-tight-2 uppercase",
  h4: "text-mobile-h4 md:text-h4 font-black tracking-tight-1 uppercase",
  b1: "text-b1 font-normal tracking-tight-1",
  b1Black: "text-b1 font-black tracking-tight-1",
  b2: "text-b2 font-normal tracking-tight-4",
  b2Black: "text-b2 font-black tracking-tight-4",
  b3: "text-b3 font-normal tracking-tight-1",
  b3Bold: "text-b3 font-bold tracking-tight-1",
  b4: "text-b4 font-normal tracking-tight-3",
  e1: "text-e1 font-black tracking-wide-15 uppercase",
  e2: "text-e2 font-normal tracking-wide-15 uppercase",
  cta1: "text-cta1 font-bold tracking-tight-1",
  cta2: "text-cta2 font-bold tracking-tight-1",
};

const variantWeights: Record<TextVariant, number> = {
  h1: 900,
  h2: 900,
  h3: 900,
  h4: 900,
  b1: 400,
  b1Black: 900,
  b2: 400,
  b2Black: 900,
  b3: 400,
  b3Bold: 700,
  b4: 400,
  e1: 900,
  e2: 400,
  cta1: 700,
  cta2: 700,
};

export default function Text({
  children,
  variant = "b2",
  italic = false,
  className,
  as,
  ...props
}: TextProps) {
  // Map headlines to heading tags if not provided
  const defaultComponent = variant.startsWith("h")
    ? (variant as React.ElementType)
    : "p";
  const Component = as || defaultComponent;

  return (
    <Typography
      component={Component}
      className={[
        "text-white",
        variantStyles[variant],
        italic && "italic",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      sx={{
        fontWeight: variantWeights[variant],
        fontFamily: 'inherit', // Ensure it inherits Noto Sans from body
        ...((props as any).sx || {}),
      }}
      {...props}
    >
      {children}
    </Typography>
  );
}
