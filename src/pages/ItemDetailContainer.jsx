import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from '../Components/Item';
import items from '../Components/ItemsData';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const selectedItem = items.find((item) => item.id === parseInt(id));
    setItem(selectedItem);
  }, [id]);

  return (
    <div>
      {item ? <Item item={item} /> : <p>Cargando...</p>}
    </div>
  );
};

export default ItemDetailContainer;

