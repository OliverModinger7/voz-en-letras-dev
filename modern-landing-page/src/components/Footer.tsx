import React from 'react';
import styles from '../styles/Footer.module.css';

/* 
   Si prefieres usar íconos locales, coloca tus archivos en /public/ 
   (por ejemplo, /public/icon-email.png) y usa <img src="/icon-email.png" />.

   O si prefieres librerías de íconos como react-icons, puedes importarlas así:
   import { FaEnvelope, FaPhone, FaInstagram } from 'react-icons/fa';
*/

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.title}>¿Tienes dudas? Contáctanos</h2>

      <div className={styles.contactContainer}>
        {/* Email */}
        <div className={styles.contactItem}>
          {/* <FaEnvelope className={styles.icon} /> si usas react-icons */}
          <img src="/icon-email.png" alt="Email" className={styles.icon} />
          <p>vozenletraschile@gmail.com</p>
        </div>

        {/* Teléfono / WhatsApp */}
        <div className={styles.contactItem}>
          {/* <FaPhone className={styles.icon} /> si usas react-icons */}
          <img src="/icon-whatsapp.png" alt="WhatsApp" className={styles.icon} />
          <p>+56 9 7659 2981</p>
        </div>

        {/* Instagram (o la red social que desees) */}
        <div className={styles.contactItem}>
          {/* <FaInstagram className={styles.icon} /> si usas react-icons */}
          <img src="/icon-instagram.png" alt="Instagram" className={styles.icon} />
          <p>@vozenletraschile</p>
        </div>
      </div>
    </footer>
  );
}
