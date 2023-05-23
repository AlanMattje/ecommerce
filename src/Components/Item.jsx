import React from 'react';

const Item = ({ item }) => {
  return (
    <div>
      <h2>{item.titulo}</h2>
      <img src={item.imagen} alt={item.titulo} />
      <p>{item.descripcion}</p>
      <p>{item.precio}</p>
    </div>
  );
};

export default Item;
