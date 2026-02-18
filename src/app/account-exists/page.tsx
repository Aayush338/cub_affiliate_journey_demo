"use client";

import { Assets } from "@/constants/assets";
import { Box, Typography } from "@mui/material";
import { TopBar } from "@/components/common/TopBar";
import Image from "next/image";

import { CustomButton } from "@/components/ui/CustomButton";

export default function AccountExistsPage() {
  const redirectToAppStore = () => {
    if (typeof window === "undefined") return;

    const userAgent = window.navigator.userAgent.toLowerCase();
    if (
      userAgent.includes("iphone") ||
      userAgent.includes("ipad") ||
      userAgent.includes("ipod")
    ) {
      // iOS
      window.open(
        "https://apps.apple.com/in/app/salaryse/id6471236999",
        "_blank",
      );
    } else if (userAgent.includes("android")) {
      // Android
      window.open("market://details?id=com.salaryse.android", "_blank");
    } else {
      // Fallback: show a landing page or both links
      window.open(
        "https://play.google.com/store/apps/details?id=com.salaryse.android",
        "_blank",
      );
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "black",
        backgroundImage: `url(${Assets.cubBgBlueBlur})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          px: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TopBar />
        <Box sx={{ marginBottom: "56px" }} />
        <Image
          src={Assets.cubAlreadySignupGraphic}
          alt="cub_already_signup_graphic"
          width={1000}
          height={198}
          style={{ width: "100%", height: "auto" }}
        />
        <Box sx={{ marginBottom: "40px" }} />
        <Typography
          sx={{
            fontSize: "24px",
            letterSpacing: "-0.02em",
            lineHeight: "32px",
            fontWeight: "900",
            color: "#fff",
            textAlign: "center",
          }}
        >
          you're already signed up!
        </Typography>
        <Box sx={{ marginBottom: "8px" }} />
        <Typography
          sx={{
            fontSize: "14px",
            letterSpacing: "-0.02em",
            lineHeight: "20px",
            fontWeight: "400",
            color: "rgba(255, 255, 255, 0.7)",
            textAlign: "center",
          }}
        >
          as a SalarySe member, just open the app to apply
          <br />
          for credit cards and unlock exclusive benefits!
        </Typography>
      </Box>

      <Box sx={{ px: 2, pb: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "13.5px",
              letterSpacing: "-0.02em",
              lineHeight: "18px",
              fontWeight: "400",
              color: "rgba(255, 255, 255, 0.8)",
              textAlign: "center",
            }}
          >
            available on both
          </Typography>
          <Box
            sx={{ px: 1, cursor: "pointer" }}
            onClick={() => window.open("https://play.google.com/store/apps/details?id=com.salaryse.android", "_blank")}
          >
            <Image
              src={Assets.playStoreIcon}
              alt="play_store_icon"
              width={16}
              height={16}
            />
          </Box>
          <Typography
            sx={{
              fontSize: "13.5px",
              letterSpacing: "-0.02em",
              lineHeight: "18px",
              fontWeight: "400",
              color: "rgba(255, 255, 255, 0.8)",
              textAlign: "center",
            }}
          >
            /
          </Typography>
          <Box
            sx={{ px: 1, cursor: "pointer" }}
            onClick={() => window.open("https://apps.apple.com/in/app/salaryse/id6471236999", "_blank")}
          >
            <Image
              src={Assets.appStoreIcon}
              alt="app_store_icon"
              width={16}
              height={16}
            />
          </Box>
        </Box>
        <Box sx={{ marginBottom: "16px" }} />
        <CustomButton
          label="apply on SalarySe App now!!"
          onTap={redirectToAppStore}
        />
      </Box>
    </Box>
  );
}
