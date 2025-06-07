import React from 'react';
import styles from '../styles/Land.module.css';
import Link from 'next/link';

const Land: React.FC = () => {
  return (
    <section className={styles.landSection}>
      <div className={styles.imageContainer}>

        <div className={styles.textOverlay}>
          <h1 className={styles.title}>
            Convierte tus<br/>
            audios en texto
          </h1>
          <p className={styles.subtitle}>
            De manera rápida y precisa
          </p>
          <Link href="#cotiza">
            <button className={styles.button}>Cotiza ahora desde $150 CLP/minuto</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Land;