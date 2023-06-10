import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../Components/Navbar/Navbar';
import ItemDetailContainer from '../Components/ItemDetail/ItemDetailContainer';
import ItemListContainer from '../Components/ItemList/ItemListContainer';
import Carrito from '../Components/Carrito/Carrito';
import Confirmacion from '../Components/OrdenCompra/Confirmacion';

const Rutas = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category" element={<ItemListContainer cartItems={cartItems} setCartItems={setCartItems} />}/>
        <Route path="/category/:categoria/:id" element={<ItemDetailContainer cartItems={cartItems} setCartItems={setCartItems} />}/>
        <Route path="/checkout" element={<Carrito cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/confirmacion" element={<Confirmacion />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rutas;

