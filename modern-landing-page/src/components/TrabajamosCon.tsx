import styles from '../styles/WorksWithSection.module.css';
import Image from 'next/image';

const WorksWithSection = () => (
  <section id="works" className={styles.works}>
    <h2>Trabajamos con...</h2>
    <div className={styles.grid}>
      <div className={styles.card}>
        <Image
            src="/precision-icon.png"
            alt="Precisión"
            width={100}
            height={100}
            className={styles.icon}
          />
        <h3>Precisión</h3>
        <p>Atención meticulosa a cada palabra.</p>
      </div>
      <div className={styles.card}>
        <Image
            src="/profesionales-icon.png"
            alt="Profesionales"
            width={100}
            height={100}
            className={styles.icon}
          />
        <h3>Profesionales</h3>
        <p>Transcripciones realizadas por expertos.</p>
      </div>
      <div className={styles.card}>
        <Image
            src="/confidencialidad-icon.png"
            alt="Confidencialidad"
            width={100}
            height={100}
            className={styles.icon}
          />
        <h3>Confidencialidad</h3>
        <p>Tus documentos siempre seguros.</p>
      </div>
      <div className={styles.card}>
        <Image
            src="/rapidez-icon.png"
            alt="Rapidez"
            width={100}
            height={100}
            className={styles.icon}
            />
        <h3>Rapidez</h3>
        <p>Entrega en 24/48/72 horas.</p>
      </div>
    </div>
  </section>
);

export default WorksWithSection;