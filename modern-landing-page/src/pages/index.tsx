import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';
import Land from 'components/Land';
import Image from 'next/image';
import Head from 'next/head';
import QueHacemos from '../components/QueHacemos';
import TrabajamosCon from '../components/TrabajamosCon';
import EligeServicios from '../components/EligeServicios';
import SumarServicio from '../components/SumarServicio';
import CotizaForm from '../components/CotizaForm';
import Fin from '../components/Fin';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Voz en Letras</title>
        <meta name="description" content="Transcripción de audios a texto" />
        <link rel="icon" href="/logoFooter.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"/>
      </Head>

      <Header />
      <Land />

      {/* Sección nueva */}
      <QueHacemos />
      <TrabajamosCon />
      <EligeServicios />
      <SumarServicio />
      <CotizaForm />
      <Footer />
      <Fin />
    </div>
  );
}