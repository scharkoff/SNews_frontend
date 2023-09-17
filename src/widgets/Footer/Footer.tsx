import React from 'react';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>SNews 2022-2023</div>
        <div>All rights reserved</div>
        <div>Developed by Sharkoff</div>
      </div>
    </footer>
  );
}
