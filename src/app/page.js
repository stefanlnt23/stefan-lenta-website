import React from 'react';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Our Complex Website</h1>
      <p className={styles.description}>
        This is the home page of our complex website built with React, Next.js, and CSS.
        We&apos;re ready for future expansions and additions of many pages.
      </p>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>Feature 1</h2>
          <p>Description of the first main feature of our website.</p>
        </div>
        <div className={styles.card}>
          <h2>Feature 2</h2>
          <p>Description of the second main feature of our website.</p>
        </div>
        <div className={styles.card}>
          <h2>Feature 3</h2>
          <p>Description of the third main feature of our website.</p>
        </div>
        <div className={styles.card}>
          <h2>Feature 4</h2>
          <p>Description of the fourth main feature of our website.</p>
        </div>
      </div>
    </div>
  );
}
