import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase.config';
import Formulario from '../Form/Form';

const Contacto = () => {
  const [mensaje, setMensaje] = useState('');

  const enviarMensaje = async (data) => {
    try {
      await addDoc(collection(db, 'preguntas'), {
        nombre: data.nombre,
        apellido: data.apellido,
        telefono: data.telefono,
        correo: data.correo,
        mensaje: data.mensaje,
      });

      setMensaje('Mensaje Enviado');

      setTimeout(() => {
        setMensaje('');
      }, 1000);
    } catch (error) {
    }
  };

  return (
    <div className='fondo'>
      <h1>Contacto</h1>
      <div className='Contactos'>
          <div className="contacto-redes">
              <a href="https://wa.me/3743566089">
                <img src="/img/logoWhatsapp.png" alt="WhatsApp" />
                Whatsapp
              </a>
              <a href="https://www.facebook.com/profile.php?id=100031027132426" target="_blank" rel="noopener noreferrer">
                <img src="/img/logoFacebook.png" alt="Facebook" />
                Facebook
              </a>
              <a href="https://www.instagram.com/engelrepuestos" target="_blank" rel="noopener noreferrer">
                <img src="/img/logoInstagram.png" alt="Instagram" />
                Instagram
              </a>
            </div>
          <div className="contacto-container">
            <div className="contacto-form">
              {mensaje && (
                <div className="mensaje-container">
                  <p className="mensaje">{mensaje}</p>
                </div>
              )}
              <Formulario onSubmit={enviarMensaje} showMensaje={true} submitButtonLabel="Enviar" />
            </div>
          </div>
      </div>
    </div>
  );
};

export default Contacto;
