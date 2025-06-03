import React from 'react';
import styles from '../styles/Land.module.css';

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
          <button className={styles.button}>
            Cotiza ahora desde $150 CLP/minuto
          </button>
        </div>
      </div>
    </section>
  );
};

export default Land;