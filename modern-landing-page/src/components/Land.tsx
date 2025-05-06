import React from "react";
import styles from "../styles/Land.module.css";

const Land: React.FC = () => {
  return (
    <section className={styles.landSection}>
      <div className={styles.main}>
        <div className={styles.colorOverlay}>
          <h1 className={styles.title}>
            <strong>Convierte tus</strong>
            <br />
            <strong>audios en texto</strong>
          </h1>
          <p className={styles.subtitle}>
            De manera rápida y precisa
          </p>
          <a href="#contacto" className={styles.button}>
            Cotiza ahora desde $150 CLP/minuto
          </a>
        </div>
      </div>
    </section>
  );
};

export default Land;
