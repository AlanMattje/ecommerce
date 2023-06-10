import React from 'react';
import { useLocation } from 'react-router-dom';

const Confirmacion = () => {
  const location = useLocation();
  const orderId = location.state?.orderId;

  return (
    <div className='confirmacion-container'>
      <h1 className='confirmacion-titulo'>COMPRA REALIZADA</h1>
      <img className='confirmacion-imagen' src="./img/CompraRealizada.png" alt="CompraRealizda" />
      {orderId && (
        <div>
          <p className='confirmacion-orden'>Orden creada: {orderId}</p>
          <p className='confirmacion-detalle'>Gracias por realizar su compra, nuestros asesores se contactarán con usted a la brevedad.</p>
        </div>
      )}
    </div>
  );
};

export default Confirmacion;
