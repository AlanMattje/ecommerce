import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Contacto from '../pages/Contactos';
import Home from '../pages/Home'
import ItemDetailContainer from '../Components/ItemDetail/ItemDetailContainer';
import ItemListContainer from '../pages/Categorias';
import Carrito from '../Components/Carrito/Carrito';
import Confirmacion from '../Components/OrdenCompra/Confirmacion';

const Rutas = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes className="Todo">
        <Route path="/" element={<Home/>} />
        <Route path="/category" element={<ItemListContainer cartItems={cartItems} setCartItems={setCartItems} />}/>
        <Route path="/category/:categoria/:id" element={<ItemDetailContainer cartItems={cartItems} setCartItems={setCartItems} />}/>
        <Route path="/checkout" element={<Carrito cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/confirmacion" element={<Confirmacion />} />
        <Route path="/Contactos" element={<Contacto />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Rutas;

