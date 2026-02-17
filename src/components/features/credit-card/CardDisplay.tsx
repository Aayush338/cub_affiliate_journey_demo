import React from 'react';
import styles from '@/styles/components/CardDisplay.module.css';

export function CardDisplay() {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <div className={styles.cardBackground}>
          <h2 className={styles.heading}>earn your Salary Day bonus</h2>
          <p className={styles.rates}>37.5% rewards</p>
          <div className={styles.cardNumberContainer}>
            <span className={styles.cardNumber}>6315****0001</span>
          </div>
          <div className={styles.illustration}>
            <div className={styles.illustrationPlaceholder}>💳</div>
          </div>
        </div>
      </div>
      <div className={styles.pageIndicators}>
        <div className={styles.indicator} />
        <div className={styles.indicatorActive} />
        <div className={styles.indicator} />
      </div>
      
      <div className={styles.switcherContainer}>
        <div className={styles.switcherOption}>
          <p className={styles.switcherTitle}>physical + virtual</p>
          <p className={styles.switcherSubtitle}>₹2L benefits at ₹500+GST</p>
        </div>
        <div className={styles.switcherOption}>
          <p className={styles.switcherTitle}>virtual only</p>
          <p className={styles.switcherSubtitle}>₹1.5L benefits at ₹0 fee</p>
        </div>
      </div>

      <button className={styles.ctaButton}>Check eligibility</button>
    </section>
  );
}
