import React from 'react';
import styles from '../styles/SumarServicio.module.css';

export default function SumarServicio() {
  return (
    <section className={styles.sumarServicioSection}>
      <h2 className={styles.title}>También puedes sumar</h2>
      <div className={styles.twoColumn}>
        
        {/* Tarjeta 1: Traducción */}
        <div className={styles.card}>
          <h3>Traducción</h3>

          <div className={styles.row}>
            <ul>
              <li>Consultar por idiomas disponibles.</li>
              <li>Tiempos, formato y soporte según el plan inicial escogido.</li>
            </ul>
            <p className={styles.price}>
              <span className={styles.priceValue}>+$50</span>
              <span className={styles.priceUnit}>/minuto</span>
            </p>
          </div>

          <button className={styles.button}>SUMAR TRADUCCION</button>
        </div>
        {/* Tarjeta 2: Subtítulos */}
        <div className={styles.card}>
          <h3>Subtítulos</h3>
          <div className={styles.row}>
            <ul>
              <li>Si el formato inicial es video se puede sumar este servicio.</li>
              <li>Tiempos y soporte según el plan inicial.</li>
            </ul>
            <p className={styles.price}>
              <span className={styles.priceValue}>+$80</span>
              <span className={styles.priceUnit}>/minuto</span>
            </p>
          </div>

          <button className={styles.button}>SUMAR SUBTITULOS</button>
        </div>
      </div>
    </section>
  );
}
