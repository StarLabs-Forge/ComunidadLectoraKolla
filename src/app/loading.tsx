import React from 'react';
import KollaLogo from '@/components/brand/KollaLogo';
import styles from './loading.module.css';

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingContent}>
        <KollaLogo variant="vertical" height={96} className={styles.logo} />
        <div className={styles.spinner}></div>
        <p className={styles.loadingText}>Cargando...</p>
      </div>
    </div>
  );
}
