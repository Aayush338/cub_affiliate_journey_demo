"use client";

import React from "react";
import { CardHeader } from "@/components/features/cub_cvp/CardHeader";
import { BonusSection } from "@/components/features/cub_cvp/BonusSection";
import { RewardsSection } from "@/components/features/cub_cvp/RewardsSection";
import { KeyDetailsTable } from "@/components/features/cub_cvp/KeyDetailsTable";
import { Box } from "@mui/material";
import { Assets } from "@/constants/assets";
import { BenefitsTable } from "@/components/features/cub_cvp/BenefitsTable";
import { LifetimeFreeSection } from "@/components/features/cub_cvp/LifetimeFreeSection";
import { CardSwitcher } from "@/components/features/cub_cvp/CardSwitcher";

export default function CreditCardJourneyPage() {

  const [cardType, setCardType] = React.useState<"physical" | "virtual">("physical");

  return (
    <Box
      sx={{
        backgroundColor: "black",
        backgroundImage: `url(${Assets.cubBgBlueBlur})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100dvh",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      <CardHeader />
      <CardSwitcher selected={cardType} onSelect={setCardType} />
      <BonusSection />
      <RewardsSection />
      <LifetimeFreeSection />
      <KeyDetailsTable />
      <BenefitsTable selected={cardType} onSelect={setCardType} />
    </Box>
  );
}
