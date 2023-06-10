import React from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase.config';
import Formulario from '../Form/Form';
import { useNavigate } from 'react-router-dom';

const Ordenes = ({ cartItems, setCartItems }) => {
  const navigate = useNavigate();

  const crearOrden = async (data) => {
    const { nombre, apellido, telefono, correo } = data;

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
    } catch (error) {
      alert('Ocurrió un error al procesar la orden. Por favor, intenta nuevamente.');
    }
  };

  return (
    <div className="Ordenes">
      <h1 className="Ordenes-titulo">Ingrese sus datos para finalizar la compra</h1>
      <Formulario onSubmit={crearOrden} showMensaje={false} submitButtonLabel="Comprar" />
    </div>
  );
};

export default Ordenes;
