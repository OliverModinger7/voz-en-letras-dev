import React from 'react';
import styles from '../styles/SumarServicio.module.css';
import Link from 'next/link';

export default function SumarServicio() {
  return (
    <section id="extras" className={styles.sumarServicioSection}>
      <h2 className={styles.title}>También puedes sumar</h2>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <h3>Traducción</h3>
          <div className={styles.row}>
            <ul>
              <li>Consultar por idiomas disponibles</li>
              <li>Tiempos, formato y soporte según el plan inicial escogido</li>
            </ul>
            <p className={styles.price}>
              <span className={styles.priceValue}>+$50</span>
              <span className={styles.priceUnit}>/minuto</span>
            </p>
          </div>
          < Link href="#cotiza" className={styles.button}>Sumar Traducción</Link>
        </div>
        <div className={styles.card}>
          <h3>Subtítulos</h3>
          <div className={styles.row}>
            <ul>
              <li>Si el formato inicial es video se puede sumar este servicio</li>
              <li>Tiempos y soporte según el plan inicial</li>
            </ul>
            <p className={styles.price}>
              <span className={styles.priceValue}>+$80</span>
              <span className={styles.priceUnit}>/minuto</span>
            </p>
          </div>
          < Link href="#cotiza" className={styles.button}>Sumar Subtítulos</Link>
        </div>
      </div>
    </section>
  );
}