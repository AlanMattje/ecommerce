import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase.config';

const Ordenes = ({ cartItems, setCartItems }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const navigate = useNavigate();

  const crearOrden = async (e) => {
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

    try {
      const ordenRef = await addDoc(collection(db, 'ordenes'), {
        nombre,
        apellido,
        telefono,
        correo,
        items: cartItems,
      });

      setCartItems([]);
      navigate('/confirmacion', { state: { orderId: ordenRef.id } });
    } catch (error) {}
  };

  return (
    <div className='Ordenes'>
      <h1 className='Ordenes-titulo'>Ingrese sus datos para finalizar la compra</h1>
      <form onSubmit={crearOrden}>
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
        <button type="submit">Comprar</button>
      </form>
    </div>
  );
};

export default Ordenes;
