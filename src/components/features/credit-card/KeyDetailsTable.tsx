import React from 'react';
import styles from '@/styles/components/KeyDetailsTable.module.css';

export function KeyDetailsTable() {
  const details = [
    { label: 'Annual Fee', value: '₹500 + GST', highlight: true },
    { label: 'Foreign Transaction Fee', value: '0%' },
    { label: 'Joining Benefit', value: '₹6,500' },
    { label: 'Annual Bonus Points', value: 'Up to ₹2L' },
    { label: 'Renewal Fee Waiver', value: 'Spend ₹14L+' },
    { label: 'Cashback Rate', value: '1-10%' },
  ];

  return (
    <section className={styles.section}>
      <h3 className={styles.heading}>key details</h3>
      
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <tbody>
            {details.map((detail, index) => (
              <tr key={index} className={detail.highlight ? styles.highlightRow : ''}>
                <td className={styles.label}>{detail.label}</td>
                <td className={styles.value}>{detail.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
