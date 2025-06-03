import React, { useState } from 'react';
import styles from '../styles/CotizaForm.module.css';
import { submitForm } from '../utils/api'; // Ajusta la ruta si tu api.ts está en otra carpeta

const CotizaForm: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [plan, setPlan] = useState('');
  const [servicioExtra, setServicioExtra] = useState('');
  const [detalles, setDetalles] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');
    try {
      await submitForm(
        `${process.env.NEXT_PUBLIC_API_URL}/formularios`,
        { nombre, email, telefono, empresa, plan, servicioExtra, detalles }
      );
      setStatus('success');
      setNombre(''); setEmail(''); setTelefono(''); setEmpresa('');
      setPlan(''); setServicioExtra(''); setDetalles('');
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.formSection}>
      <h2 className={styles.title}>Cotiza con nosotros_</h2>
      <form className={styles.form} onSubmit={handleSubmit}>

        {/* Nombre completo */}
        <div className={styles.formGroup}>
          <label htmlFor="nombre">Nombre y apellido</label>
          <input
            id="nombre"
            type="text"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            //placeholder="Tu nombre completo"
            required
          />
        </div>

        {/* Email + Teléfono */}
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              //placeholder="tucorreo@ejemplo.com"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="telefono">Teléfono (opcional)</label>
            <input
              id="telefono"
              type="tel"
              value={telefono}
              onChange={e => setTelefono(e.target.value)}
              //placeholder="+56 9 1234 5678"
            />
          </div>
        </div>

        {/* Empresa */}
        <div className={styles.formGroup}>
          <label htmlFor="empresa">Empresa (opcional)</label>
          <input
            id="empresa"
            type="text"
            value={empresa}
            onChange={e => setEmpresa(e.target.value)}
            //placeholder="Nombre de tu empresa"
          />
        </div>

        {/* Plan */}
        <div className={styles.formGroup}>
          <label htmlFor="plan">Selecciona tu plan</label>
          <select
            id="plan"
            value={plan}
            onChange={e => setPlan(e.target.value)}
            required
          >
            <option value="">Elige una opción</option>
            <option value="basico">Básico</option>
            <option value="profesional">Profesional</option>
            <option value="premium">Premium</option>
          </select>
        </div>

        {/* Servicio extra */}
        <div className={styles.formGroup}>
          <label htmlFor="servicioExtra">¿Quieres sumar traducción o subtítulos?</label>
          <select
            id="servicioExtra"
            value={servicioExtra}
            onChange={e => setServicioExtra(e.target.value)}
          >
            <option value="">Ninguno</option>
            <option value="traduccion">Traducción</option>
            <option value="subtitulos">Subtítulos</option>
            <option value="ambos">Ambos</option>
          </select>
        </div>

        {/* Detalles */}
        <div className={styles.formGroup}>
          <label htmlFor="detalles">Detalles del trabajo</label>
          <textarea
            id="detalles"
            rows={4}
            value={detalles}
            onChange={e => setDetalles(e.target.value)}
            placeholder="Describe tu proyecto"
          />
        </div>

        {/* Enviar */}
        <button
          type="submit"
          className={styles.submitButton}
          disabled={loading}
        >
          {loading ? 'Enviando...' : 'Enviar'}
        </button>
      </form>

      {status === 'success' && (
        <p className={styles.successMessage}>¡Formulario enviado correctamente!</p>
      )}
      {status === 'error' && (
        <p className={styles.errorMessage}>Ocurrió un error. Inténtalo de nuevo.</p>
      )}
    </section>
  );
};

export default CotizaForm;
