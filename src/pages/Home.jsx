import React from 'react';
import HomeItemListContainer from '../Components/ItemList/HomeItemListContainer';

    
const Home = () => {

 
    return (
    <div>
      <div className="imagen-grande">
        <img src="./img/local.png" alt="Imagen grande" />
      </div>

      <div className="categories-container">
      <HomeItemListContainer />
      </div>
        
      <div className="mapa">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14228.913829207244!2d-55.059124!3d-26.927971!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f8237e2bfa06a3%3A0xdc6cb6d35390ce9a!2sEngel%20Repuestos!5e0!3m2!1ses-419!2sar!4v1686423792890!5m2!1ses-419!2sar"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
        ></iframe>
        <div className="direccion-container">
            <h2>Dirección</h2>
            <p>Calle Guarani y Los Jesuitas</p>
            <p>Capiovi - Misiones</p>
            <p>Teléfono: 3743-000000</p>
            <p>Correo: Engelrepuestos@gmail.com</p>
            </div>
      </div>
    </div>
  );
};

export default Home;