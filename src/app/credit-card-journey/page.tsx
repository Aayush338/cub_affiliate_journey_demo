'use client';

import { CardHeader } from '@/components/features/credit-card/CardHeader';
import { CardDisplay } from '@/components/features/credit-card/CardDisplay';
import { BonusSection } from '@/components/features/credit-card/BonusSection';
import { RewardsSection } from '@/components/features/credit-card/RewardsSection';
import { BenefitsSection } from '@/components/features/credit-card/BenefitsSection';
import { KeyDetailsTable } from '@/components/features/credit-card/KeyDetailsTable';
import { BottomCTA } from '@/components/features/credit-card/BottomCTA';
import styles from '@/styles/credit-card-journey.module.css';
import { Box } from '@mui/material';
import { Assets } from '@/constants/assets';
import { BenefitsTable } from '@/components/features/credit-card/BenefitsTable';

export default function CreditCardJourneyPage() {
  return (
    <Box
      className={styles.container}
      sx={{
        backgroundColor: "#121212",
        backgroundImage: `url(${Assets.cubBgBlueBlur})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}
    >
      <CardHeader />
      <BonusSection />
      <RewardsSection />
      <BenefitsTable/>
      <BenefitsSection />
      <KeyDetailsTable />
      <BottomCTA />
    </Box>
  );
}