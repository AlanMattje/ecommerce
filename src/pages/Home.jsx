import React from 'react';
import Item from '../Components/Item';
import items from '../Components/ItemsData';

const Home = () => {
  return (
    <div>
      <div className='Items'>
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
