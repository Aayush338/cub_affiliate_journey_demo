import React from "react";
import styles from "@/styles/components/CardHeader.module.css";
import Image from "next/image";
import { Assets } from "@/constants/assets";
import Text from "@/components/ui/Text";
import { MobileTextField } from "@/components/ui/mobile-text-field";
import { CheckboxWithText } from "@/components/ui/checkbox-with-text";
import { Box } from "@mui/material";

export function CardHeader() {
  return (
    <Box className={styles.header}>
      <Box className={styles.topBar}>
        <Image
          src={Assets.salaryseNameLogo}
          alt="Next.js logo"
          width={100}
          height={24}
          priority
        />
        <Image
          src={Assets.cubLogo}
          alt="Next.js logo"
          width={40}
          height={40}
          priority
        />
      </Box>

      <Text variant="b2" sx={{ mt: "32px", mb: "4px", textAlign: "center" }}>
        earn your{" "}
        <Text as="span" variant="b2Black" italic>
          Salary Day bonus
        </Text>
      </Text>
      <Box className="flex justify-center mb-2">
        <Image
          src={Assets.cubSalaryDayRewards}
          alt="Cub Salary Day Rewards"
          width={202}
          height={36}
          priority
        />
      </Box>
      <Box className="relative w-full">
        {/* Background Section */}
        <Box className="relative h-[208px] w-full">
          <Image
            src={Assets.cubCvpCardImage}
            alt="CUB CVP CARD IMAGE"
            fill
            className="object-contain"
            priority
          />
        </Box>

        {/* Glass Card (Stacked) */}
        <Box className="absolute left-0 right-0 bottom-[-200px] z-20">
          <Box className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-[40px] p-6 shadow-2xl max-w-[343px] mx-auto flex flex-col text-center justify-start">
            <Text as="p" variant="b1Black" sx={{ mb: "16px" }}>
              complete your card application
            </Text>
            <MobileTextField label="mobile number" type="tel" />
            <CheckboxWithText
              text="by submitting, I agree to the"
              linkText="terms and conditions"
              linkHref="https://example.com/terms"
              textAfterLink="and consent to Critical Path Technologies Pvt. Ltd. obtaining my credit information from Experian."
              className="mt-4"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
