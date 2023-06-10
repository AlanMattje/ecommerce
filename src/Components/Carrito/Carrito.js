import React from 'react';
import Ordenes from '../OrdenCompra/Ordenes';

const Carrito = ({ cartItems, setCartItems }) => {
  const eliminarDelCarrito = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };

  const calcularTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.Precio * item.cantidad;
    });
    return total;
  };

  return (
    <div>
      <div className="Cart">
        <h1>Carrito de compras</h1>
        <h1>Total: ${calcularTotal()}</h1>
      </div>
      <div>
        {Array.isArray(cartItems) && cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div className="Cart-container" key={item.id}>
              <img className="Cart-img" src={`/img/${item.Imagen}`} alt={item.Modelo} />
              <div>{item.Categoria}</div>
              <div>{item.Marca}</div>
              <div>{item.Modelo}</div>
              <div>$ {item.Precio}</div>
              <div>Cantidad: {item.cantidad}</div>
              <button onClick={() => eliminarDelCarrito(item.id)}>❌</button>
            </div>
          ))
        ) : (
          <h1 className='Cart-Vacio'>No hay productos agregados al carrito ☹️</h1>
        )}
      </div>
      {cartItems.length > 0 && (
         <Ordenes cartItems={cartItems} setCartItems={setCartItems} />
       )}
    </div>
  );
};

export default Carrito;
