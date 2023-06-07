import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Item = ({ item }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    const currentPath = location.pathname;
    const navigatePath = currentPath.includes('/category')
      ? `/category/item/${item.id}`
      : `/item/${item.id}`;
    navigate(navigatePath);
  };

  return (
    <div className="product">
      <h2>{item.titulo}</h2>
      <img src={item.imagen} alt={item.titulo} />
      <p>{item.descripcion}</p>
      <p>{item.precio}</p>
      {location.pathname.includes('/category') ? (
        <Link to={`/category/item/${item.id}`} className='VerMas'>Ver más</Link>
      ) : (
        <Link to={`/item/${item.id}`} className='VerMas' onClick={handleClick}>Ver más</Link>
      )}
    </div>
  );
};

export default Item;
