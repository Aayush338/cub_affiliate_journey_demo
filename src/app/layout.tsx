import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

import { Box } from "@mui/material";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { NotistackProvider } from "@/components/providers/NotistackProvider";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CUB Affiliate Journey",
  description: "CUB Affiliate Journey by SalarySe",
  icons: {
    icon: "/favicon.png",
  },
};


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
        <AppRouterCacheProvider>
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
                height: "100dvh",
                maxWidth: {
                  xs: "100%",
                  sm: "640px",
                  md: "460px",
                },
                maxHeight: {
                  xs: "100dvh",
                  sm: "960px",
                },
                backgroundColor: "#000000",
                position: "relative",
                overflowY: "auto",
                overflowX: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <NotistackProvider>
                {children}
              </NotistackProvider>
            </Box>
          </Box>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
