import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Home from '../pages/Home';
import ItemDetailContainer from '../pages/ItemDetailContainer';
import ItemListContainer from '../pages/ItemListContainer';

const Rutas = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/category/:item/:id" element={<ItemDetailContainer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Rutas;
