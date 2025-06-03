import styles from '../styles/QueHacemos.module.css';
import React from 'react';
import Image from 'next/image';


const QueHacemos = () => (
  <section className={styles.twoColumn}>
    <div id="what" className={styles.column}>
      <h2>¿Qué hacemos?</h2>
      <p>
        Transformamos tus audios en texto <strong>preciso, rápido y confiable</strong>.
        Ya sea que grabes entrevistas, tomes notas de clases o documentes reuniones importantes,
         nuestro servicio combina <strong>tecnología avanzada y revisión humana</strong> para garantizar calidad y 
         confidencialidad.
      </p>
    </div>
    <div id="for-who" className={styles.column}>
      <h2>Si eres...</h2>
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
  </section>
);

export default QueHacemos;