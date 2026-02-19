import React from 'react';
import styles from '@/styles/components/BottomCTA.module.css';

export function BottomCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.ctaBox}>
        <h3 className={styles.heading}>Looking for lifetime fee credit card?</h3>
        <p className={styles.subtitle}>Rabbit is for you only</p>
        <button className={styles.button}>Apply Now</button>
      </div>
    </section>
  );
}
