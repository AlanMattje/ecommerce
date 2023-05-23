import React from 'react';
import Item from '../Components/Item';
import items from '../Components/ItemsData';

const ItemListContainer = () => {
  return (
    <div>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemListContainer;