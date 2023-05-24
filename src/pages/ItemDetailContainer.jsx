import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import items from '../Components/ItemsData';

const ItemDetailContainer = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const selectedItem = items.find((item) => item.id === parseInt(id));
    setItem(selectedItem);
  }, [id]);

  const subir = () => {
    setQuantity(quantity + 1);
  };

  const bajar = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const agregarAlCarrito = () => {
    navigate('/Checkout');
  };

  return (
    <div>
      <button className="Volver" onClick={() => navigate(-1)}>Volver</button>
      {item ? (
        <div>
          <h2>{item.titulo}</h2>
          <img src={item.imagen} alt={item.titulo} />
          <p>{item.descripcion}</p>
          <p>{item.precio}</p>
          <div className='cantidades'>
            <span>{quantity}</span>
            <button onClick={subir}>Subir</button>
            <button onClick={bajar}>Bajar</button>
            <button onClick={agregarAlCarrito}>Agregar al carrito</button>
          </div>
        </div>
      ) : (
        <p>No se encontró el ítem.</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
