import React from 'react';
import Image from 'next/image';
import styles from '../styles/Fin.module.css';
import logoFin from '../../public/LogoFooter.png'; 

const Fin: React.FC = () => {
  return (
    <section className={styles.finSection}>
      <div className={styles.logoContainer}>
        <Image src={logoFin} alt="Voz en Letras" width={50} height={50} />
      </div>
      <p className={styles.copyright}>
        © 2023 Voz en Letras - Todos los derechos reservados
      </p>
    </section>
  );
};

export default Fin;
