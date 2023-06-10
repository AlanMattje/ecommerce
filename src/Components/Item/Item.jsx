import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  return (
    <div className="product">
      <p>{item.Categoria} {item.Modelo}</p>
      <img className="item-imagen" src={`/img/${item.Imagen}`} alt={item.Modelo} />
      <p>De la Marca: {item.Marca}</p>
      <p> $ {item.Precio}</p>
      <Link to={`/category/${item.Categoria.toLowerCase()}/${item.id}`} className="VerMas">
        Ver más
      </Link>
    </div>
  );
};

export default Item;
