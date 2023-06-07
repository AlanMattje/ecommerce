import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Home from '../pages/Home';
import ItemDetailContainer from '../pages/ItemDetailContainer';
import ItemListContainer from '../pages/ItemListContainer';
import Carrito from '../Components/Carrito';

const Rutas = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<ItemListContainer />} />
        <Route
          path="/item/:id"
          element={<ItemDetailContainer cartItems={cartItems} setCartItems={setCartItems} />}
        />
        <Route
          path="/category"
          element={<ItemListContainer cartItems={cartItems} setCartItems={setCartItems} />}
        />
        <Route
          path="/category/:item/:id"
          element={<ItemDetailContainer cartItems={cartItems} setCartItems={setCartItems} />}
        />
        <Route path="/checkout" element={<Carrito cartItems={cartItems} setCartItems={setCartItems} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Rutas;

