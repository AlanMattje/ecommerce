import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer bg-silver text-center">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
          <Link to="/"><img src="/img/logoh.png" alt="Logo Engel Repuestos" /></Link>
          </div>
          <div className="footer-social-icons">
            <a href="https://www.facebook.com/profile.php?id=100031027132426" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/engelrepuestos" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://wa.me/3743566089" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
          </div>
          <div className="footer-text">
            <p>© 2023 Engel Repuestos. Todos los derechos reservados.</p>
            <p>Sitio creado por AM Soluciones Informáticas</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
