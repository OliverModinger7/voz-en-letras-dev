import React from 'react';
import styles from '../styles/TrabajamosCon.module.css';
import Image from 'next/image';

const TrabajamosCon: React.FC = () => {
  return (
    <section className={styles.trabajamosConSection}>
      <h2 className={styles.title}>Trabajamos con</h2>
      <div className={styles.gridContainer}>
        {/* Item 1 */}
        <div className={styles.item}>
          <Image
            src="/precision-icon.png"
            alt="Precisión"
            width={100}
            height={100}
            className={styles.icon}
          />
          <h3>Precisión</h3>
          <p>Ponemos atención a cada palabra</p>
        </div>

        {/* Item 2 */}
        <div className={styles.item}>
          <Image
            src="/profesionales-icon.png"
            alt="Profesionales"
            width={100}
            height={100}
            className={styles.icon}
          />
          <h3>Profesionales</h3>
          <p>Transcriptores con experiencia</p>
        </div>

        {/* Item 3 */}
        <div className={styles.item}>
          <Image
            src="/confidencialidad-icon.png"
            alt="Confidencialidad"
            width={100}
            height={100}
            className={styles.icon}
          />
          <h3>Confidencialidad</h3>
          <p>Tus documentos seguros</p>
        </div>

        {/* Item 4 */}
        <div className={styles.item}>
          <Image
            src="/rapidez-icon.png"
            alt="Rapidez"
            width={100}
            height={100}
            className={styles.icon}
          />
          <h3>Rapidez</h3>
          <p>Entrega en 24/48/72 horas</p>
        </div>
      </div>
    </section>
  );
};

export default TrabajamosCon;
