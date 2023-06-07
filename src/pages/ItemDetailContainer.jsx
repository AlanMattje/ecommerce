import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import items from '../Components/ItemsData';

const ItemDetailContainer = ({ cartItems, setCartItems }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    const selectedItem = items.find((item) => item.id === parseInt(id));
    setItem(selectedItem);
  }, [id]);

  const subir = () => {
    setCantidad(cantidad + 1);
  };

  const bajar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const agregarAlCarrito = () => {
    const itemExistente = cartItems.find((cartItem) => cartItem.id === item.id);

    if (itemExistente) {
      const nuevosItems = cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, cantidad: cartItem.cantidad + cantidad };
        }
        return cartItem;
      });

      setCartItems(nuevosItems);
    } else {
      const nuevoItem = { ...item, cantidad };
      setCartItems([...cartItems, nuevoItem]);
    }

    setMensaje('Agregado al carrito');
    setTimeout(() => {
      setMensaje('');
    }, 1000);
  };

  return (
    <div>
      <button className="Volver" onClick={() => navigate(-1)}>Volver</button>
      {item ? (
        <div className="item-container">
          <div className="image-container">
            <img src={item.imagen} alt={item.titulo} />
          </div>
          <div className="content-container">
            <h2>{item.titulo}</h2>
            <p>{item.descripcion}</p>
            <p>{item.precio}</p>
            <span>Cantidad: {cantidad}</span>
            <div className="cantidades">
              <button className="cantidad-mas" onClick={subir}>+</button>
              <button className="cantidad-menos" onClick={bajar}>-</button>
            </div>
            <button onClick={agregarAlCarrito}>Agregar al carrito</button>
            {mensaje && (
              <div className="mensaje-container">
                <p className="mensaje">{mensaje}</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <p>No se encontró el ítem.</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
