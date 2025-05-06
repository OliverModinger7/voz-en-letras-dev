import React from 'react';
import styles from '../styles/QueHacemos.module.css';

export default function QueHacemos() {
  return (
    <section id="que-hacemos" className={styles.section}>
      <div className={styles.twoColumn}>
        {/* Card para "¿Qué hacemos?" */}
        <div className={`${styles.card} ${styles.que}`}>
          <strong className={styles.strong}>¿Qué hacemos?</strong>
          <div className={styles.p}>
            <p>
              Transformamos tus audios en texto preciso, rápido y confiable. Ya sea que grabes entrevistas, tomes notas de clases o documentes reuniones importantes, nuestro servicio combina tecnología avanzada y revisión humana para garantizar calidad y confidencialidad.
            </p>
            </div>  
        </div>
        <div className={`${styles.card} ${styles.si}`}>
          <strong className={styles.strong}>Si eres...</strong>
          <section className={styles.fourColumn}>
            <div className={styles.iconCard}>
              <img src="/profesional.png" alt="Profesional" className={styles.icon} />
              <div className={styles.textContainer}>
                <h3>Profesional</h3>
                <p>Como periodistas, abogados, traductores, académicos, etc.</p>
              </div>
            </div>
            <div className={styles.iconCard}>
              <img src="/empresa.png" alt="Empresa" className={styles.icon}/>
              <div className={styles.textContainer}>
                <h3>Empresa</h3>
                <p>Que buscan transcripciones rápidas y confidenciales</p>
              </div>
            </div>
            <div className={styles.iconCard}>
              <img src="/estudiante.png" alt="Estudiante" className={styles.icon}/>
              <div className={styles.textContainer}>
                <h3>Estudiante</h3>
                <p>Que necesita registrar clases o investigaciones</p>
              </div>
            </div>
            <div className={styles.iconCard}>
              <img src="/creativo.png" alt="Creativo" className={styles.icon}/>
              <div className={styles.textContainer}>
                <h3>Creativo/a</h3>
                <p>Para plasmar ideas sin perder tiempo</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
