import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase.config';

const HomeItemListContainer = () => {
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Productos'));
        const productos = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        const filtered = productos.slice(0, 4);
        setFilteredItems(filtered);
      } catch (error) {
      }
    };

    obtenerProductos();
  }, []);

  return (
    <div className="container">
      <div className="item-list-container">
        {filteredItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default HomeItemListContainer;


