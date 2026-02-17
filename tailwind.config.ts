import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        h1: ["32px", "40px"],
        h2: ["30px", "32px"],
        h3: ["24px", "30px"],
        h4: ["20px", "12px"],
        b1: ["16px", "24px"],
        b2: ["14px", "20px"], // Updated from 22px to 20px
        b3: ["12px", "16px"],
        b4: ["10px", "14px"],
        e1: ["14px", "20px"],
        e2: ["12px", "16px"],
        cta1: ["16px", "24px"],
        cta2: ["14px", "20px"],
        "mobile-h1": ["24px", "30px"],
        "mobile-h2": ["18px", "25px"],
        "mobile-h3": ["18px", "25px"],
        "mobile-h4": ["16px", "24px"],
      },
      letterSpacing: {
        "tight-4": "-0.28px", // Specific for b2/b2Black
        "tight-3": "-0.2px",
        "tight-2": "-0.02em",
        "tight-1": "-0.01em",
        "wide-15": "0.15em",
        tightCustom: "-0.28px",
      },
    },
  },
  plugins: [],
};

export default config;