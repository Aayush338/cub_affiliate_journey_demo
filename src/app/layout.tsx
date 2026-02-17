import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans } from "next/font/google";
import "./globals.css";

import { Box } from "@mui/material";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={notoSans.className}
        style={{ margin: 0, backgroundColor: "black" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            width: "100vw",
            backgroundColor: "black",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100vh",
              maxWidth: {
                xs: "100%",
                sm: "640px",
                md: "460px",
              },
              maxHeight: {
                xs: "100vh",
                sm: "960px",
              },
              backgroundColor: "#000000",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {children}
          </Box>
        </Box>
      </body>
    </html>
  );
}
