import React from 'react';
import styles from '../styles/Servicio.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function EligeServicios() {
  return (
    <section id="servicios" className={styles.eligeServiciosSection}>
      <h2 className={styles.title}>Elige el servicio que necesitas</h2>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <h3>Plan Básico</h3>
          <div className={styles.icon}>
            <Image src="/PlanBasico.png" alt="Plan Básico" width={100} height={100} />
          </div>
          <ul>
            <li>Transcripción literal</li>
            <li>Formato simple (.txt)</li>
            <li>Soporte por email</li>
            <li>Entrega en 72 hrs</li>
          </ul>
          <p className={styles.price}>$150/minuto</p>
          <Link href="#cotiza" className={styles.button}>Elegir Plan Básico</Link>          
        </div>
        <div className={styles.card}>
          <h3>Plan Profesional</h3>
          <div className={styles.icon}>
            <Image src="/PlanProfesional.png" alt="Plan Profesional" width={100} height={100} />
          </div>
          <ul>
            <li>Transcripción literal</li>
            <li>Formatos .txt, .doc</li>
            <li>Soporte prioritario</li>
            <li>Entrega en 48 hrs</li>
          </ul>
          <p className={styles.price}>$220/minuto</p>
          <Link href="#cotiza" className={styles.button}>Elegir Plan Profesional</Link>
        </div>
        <div className={styles.card}>
          <h3>Plan Premium</h3>
          <div className={styles.icon}>
            <Image src="/PlanPremium.png" alt="Plan Premium" width={100} height={100} />
          </div>
          <ul>
            <li>Transcripción literal</li>
            <li>Formatos .txt, .doc, .pdf</li>
            <li>Soporte 24/7</li>
            <li>Entrega en 24 hrs</li>
          </ul>
          <p className={styles.price}>$300/minuto</p>
          <Link href="#cotiza" className={styles.button}>Elegir Plan Premium</Link>
        </div>
      </div>
    </section>
  );
}