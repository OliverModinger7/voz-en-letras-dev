import React from 'react';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import logo from '../../public/Logo-VozEnLetras.png'; // Ajusta la ruta si es necesario

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src={logo} alt="Logo" width={400} height={400} />
      </div>

      <nav className={styles.nav}>
        <a href="#que-hacemos">¿QUÉ HACEMOS?</a>
        <a href="#servicios">SERVICIOS</a>
        <div className={styles.separator}>
          <a href="#contacto" className={styles.contactButton}>
            COTIZA CON NOSOTROS
          </a>
        </div> 
      </nav>
    </header>
  );
};

export default Header;
