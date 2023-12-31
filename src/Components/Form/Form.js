import React, { useState } from 'react';

const Formulario = ({ onSubmit, showMensaje, submitButtonLabel }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !apellido || !telefono || !correo) {
      alert('Por favor completa todos los campos');
      return;
    }
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(correo)) {
      alert('Por favor ingresa un correo electrónico válido');
      return;
    }
    const phoneRegex = /^\d+$/;
    if (!phoneRegex.test(telefono)) {
      alert('Por favor ingresa un número de teléfono válido');
      return;
    }

    onSubmit({ nombre, apellido, telefono, correo, mensaje });
    
    setNombre('');
    setApellido('');
    setTelefono('');
    setCorreo('');
    setMensaje('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} maxLength={20} required />
      </div>
      <div>
        <label htmlFor="apellido">Apellido:</label>
        <input type="text" id="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} maxLength={20} required />
      </div>
      <div>
        <label htmlFor="telefono">Teléfono:</label>
        <input type="text" id="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} pattern="\d+" required />
      </div>
      <div>
        <label htmlFor="correo">Correo electrónico:</label>
        <input type="email" id="correo" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
      </div>
      {showMensaje && (
        <div>
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea id="mensaje" value={mensaje} onChange={(e) => setMensaje(e.target.value)}></textarea>
        </div>
      )}
      <button type="submit">{submitButtonLabel}</button>
    </form>
  );
};

export default Formulario;
