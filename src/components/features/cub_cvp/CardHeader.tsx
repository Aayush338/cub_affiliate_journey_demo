"use client";

import React, { useState, useRef } from "react";
import styles from "@/styles/components/CardHeader.module.css";
import Image from "next/image";
import { Assets } from "@/constants/assets";
import { MobileTextField } from "@/components/ui/mobile-text-field";
import { CheckboxWithText } from "@/components/ui/checkbox-with-text";
import { Box } from "@mui/material";
import { CustomButton } from "@/components/ui/CustomButton";
import { useRouter } from "next/navigation";
import { TopBar } from "@/components/common/TopBar";

const carouselData = [
  {
    text: (
      <>
        earn your <i className={styles.salaryDayBonus}>Salary Day bonus</i>
      </>
    ),
    rewardText: Assets.cubSalaryDayRewards,
    rewardImg: Assets.cubCvpIllustration1,
  },
  {
    text: <>unlock complimentary</>,
    rewardText: Assets.cubLoungeAccess,
    rewardImg: Assets.cubCvpIllustration2,
  },
  {
    text: <>save on every global spend with</>,
    rewardText: Assets.cubForexRewards,
    rewardImg: Assets.cubCvpIllustration3,
  },
];

export function CardHeader() {
  const [isAgreed, setIsAgreed] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const _handleNavigation = () => {
    router.push("/account-exists");
  };

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, "");
    if (val.length <= 10) {
      setMobileNumber(val);
    }
  };

  // Auto-scroll logic
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const nextIndex = (activeIndex + 1) % carouselData.length;
        const width = scrollRef.current.offsetWidth;
        scrollRef.current.scrollTo({
          left: nextIndex * width,
          behavior: "smooth",
        });
        setActiveIndex(nextIndex);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.offsetWidth;
      const newIndex = Math.round(scrollLeft / width);
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    }
  };

  return (
    <Box className={styles.header}>
      <TopBar />
      <Box className={styles.dotsContainer}>
        {carouselData.map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${index === activeIndex ? styles.activeDot : ""}`}
          />
        ))}
      </Box>
      <Box className={styles.cardArea}>
        <Box
          className={styles.carouselContainer}
          onScroll={handleScroll}
          ref={scrollRef}
        >
          {carouselData.map((slide, index) => (
            <Box key={index} className={styles.carouselSlide}>
              <p className={styles.earnYour}>{slide.text}</p>
              <Box sx={{ marginBottom: "4px" }} />
              <Box className={styles.rewardsImageWrapper}>
                <Image
                  src={slide.rewardText}
                  alt="Reward Info"
                  width={202}
                  height={36}
                  priority
                />
              </Box>
              <Box className={styles.cardImgWrapper}>
                <Image
                  src={slide.rewardImg}
                  alt="CUB CVP CARD IMAGE"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </Box>
            </Box>
          ))}
        </Box>

        {/* Glass Card (Stacked) */}
        <Box className={styles.glassCardWrapper}>
          <Box className={styles.glassCard}>
            <p className={styles.completeYourCardApplication}>
              complete your card application
            </p>
            <Box sx={{ marginBottom: "16px" }} />
            <MobileTextField
              label="mobile number"
              type="tel"
              value={mobileNumber}
              onChange={handleMobileChange}
            />
            <CheckboxWithText
              checked={isAgreed}
              onChange={(e) => setIsAgreed(e.target.checked)}
              text="by submitting, I agree to the"
              linkText="terms and conditions"
              linkHref="https://example.com/terms"
              textAfterLink="and consent to Critical Path Technologies Pvt. Ltd. obtaining my credit information from Experian."
              className="mt-4"
            />
            <Box sx={{ marginBottom: "16px" }} />
            <CustomButton
              label="check eligibility now"
              disabled={!isAgreed || mobileNumber.length !== 10}
              onTap={_handleNavigation}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
