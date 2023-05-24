import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <p className="navbar-brand">
          <Link to="/" className="nav-link">ENGEL <img className='logo'  src="./img/logo.ico" alt="logo engel" /></Link>
        </p>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
            <Link to="/category/1" className="nav-link">Categoria</Link>
            </li>
          </ul>
          <div className="ms-auto">
            <Link to="/checkout" className="nav-link">
            <button id="botonCarrito">
        CARRITO 🛒
           </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;