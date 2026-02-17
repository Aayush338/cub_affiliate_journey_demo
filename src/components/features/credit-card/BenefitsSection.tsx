import React from 'react';
import styles from '@/styles/components/BenefitsSection.module.css';

export function BenefitsSection() {
  return (
    <section className={styles.section}>
      <h3 className={styles.heading}>Unlimited lounge & priority benefits</h3>
      
      <div className={styles.benefitsGrid}>
        <div className={styles.benefitCard}>
          <div className={styles.gradient1} />
          <h4 className={styles.benefit}>Unlimited airport lounge access</h4>
          <p className={styles.description}>Complimentary domestic &amp; international lounge visits</p>
          <div className={styles.illustration}>🛋️</div>
        </div>
        <div className={styles.benefitCard}>
          <div className={styles.gradient2} />
          <h4 className={styles.benefit}>1% Forex cashback on international spends</h4>
          <p className={styles.description}>Exclusive forex benefits for your travel</p>
          <div className={styles.illustration}>🌍</div>
        </div>
      </div>

      <div className={styles.benefitCard}>
        <h4 className={styles.benefit}>Additional premium benefits</h4>
        <ul className={styles.benefitsList}>
          <li>Priority dining reservations</li>
          <li>Airport fast track access</li>
          <li>Travel accident insurance</li>
          <li>Complimentary travel assistance</li>
        </ul>
      </div>
    </section>
  );
}
