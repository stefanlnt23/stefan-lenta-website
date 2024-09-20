import React from 'react';
import styles from './FuturisticButton.module.css';

const FuturisticButton = ({ children, onClick }) => {
  return (
    <button className={styles.futuristicButton} onClick={onClick}>
      <span className={styles.buttonText}>{children}</span>
      <span className={styles.buttonGlow}></span>
    </button>
  );
};

export default FuturisticButton;