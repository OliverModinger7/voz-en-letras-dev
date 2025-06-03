import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import logo from '../../public/Logo-VozEnLetras.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo.src} alt="Logo Voz en Letras" className={styles.logoImage} />  
      </div>

      <nav className={styles.desktopNav}>
        <ul className={styles.menu}>
          <li><Link href="#quehacemos">¿Qué hacemos?</Link></li>
          <li><Link href="#servicios">Servicios</Link></li>
        </ul>
        <Link href="#cotiza">
          <button className={styles.cta}>Cotiza con nosotros</button>
        </Link>
      </nav>

      <button
        className={styles.mobileToggle}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menú móvil"
      >
        ☰
      </button>

      {/* Menú Mobile */}
      <nav className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>  
        <ul>
          <li><Link href="#quehacemos">¿Qué hacemos?</Link></li>
          <li><Link href="#servicios">Servicios</Link></li>
          <li>
            <Link href="#cotiza">
              <button className={styles.ctaMobile}>Cotiza con nosotros</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;