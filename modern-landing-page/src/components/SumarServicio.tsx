import React from 'react';
import styles from '../styles/SumarServicio.module.css';

export default function SumarServicio() {
  return (
    <section id="extras" className={styles.sumarServicioSection}>
      <h2 className={styles.title}>También puedes sumar</h2>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <h3>Traducción</h3>
          <div className={styles.row}>
            <ul>
              <li>Consultar idiomas disponibles</li>
              <li>Tiempos y formatos según plan base</li>
            </ul>
            <p className={styles.price}>
              <span className={styles.priceValue}>+$50</span>
              <span className={styles.priceUnit}>/minuto</span>
            </p>
          </div>
          <a href="#contacto" className={styles.button}>Sumar Traducción</a>
        </div>
        <div className={styles.card}>
          <h3>Subtítulos</h3>
          <div className={styles.row}>
            <ul>
              <li>Disponible si tienes video</li>
              <li>Soporte y tiempos según plan base</li>
            </ul>
            <p className={styles.price}>
              <span className={styles.priceValue}>+$80</span>
              <span className={styles.priceUnit}>/minuto</span>
            </p>
          </div>
          <a href="#contacto" className={styles.button}>Sumar Subtítulos</a>
        </div>
      </div>
    </section>
  );
}