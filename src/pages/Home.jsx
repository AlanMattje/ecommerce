import React from 'react';
import Item from '../Components/Item';
import items from '../Components/ItemsData';

const Home = () => {
  return (
    <div>
      <div>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;

