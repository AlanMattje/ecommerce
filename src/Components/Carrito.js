import React from 'react';

const Carrito = ({ cartItems, setCartItems }) => {
  const eliminarDelCarrito = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };

  return (
    <div>
      <h1>Carrito de compras</h1>
      {Array.isArray(cartItems) && cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.id}>
            <p>{item.titulo}</p>
            <p>{item.descripcion}</p>
            <p>{item.precio}</p>
            <p>Cantidad: {item.cantidad}</p>
            <button onClick={() => eliminarDelCarrito(item.id)}>Eliminar del carrito</button>
          </div>
        ))
      ) : (
        <p>No hay items en el carrito.</p>
      )}
    </div>
  );
};

export default Carrito;
