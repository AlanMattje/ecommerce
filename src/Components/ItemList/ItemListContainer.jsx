import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import CategoryList from '../Categorias/CategoryList';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase.config';

const ItemListContainer = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredItems, setFilteredItems] = useState([]);
  const [Productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Productos'));
        const productos = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProductos(productos);
        setFilteredItems(productos);
      } catch (error) {
      }
    };

    obtenerProductos();
  }, []);

const handleCategoryFilter = (category) => {
  setSelectedCategory(category);
  if (category && category !== 'Todas') {
    const filtered = Productos.filter((item) => item.Categoria === category);
    setFilteredItems(filtered);
  } else {
    setFilteredItems(Productos);
  }
};

  const categories = Array.from(new Set(Productos.map((item) => item.Categoria)));

  return (
    <div className="container">
      <div className="categoria-container">
        <CategoryList
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategoryFilter}
        />
      </div>
      <div className="item-list-container">
        {filteredItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
      <br />
    </div>
  );
};

export default ItemListContainer;
