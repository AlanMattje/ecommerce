import React, { useState } from 'react';
import Item from '../Components/Item';
import items from '../Components/ItemsData';
import CategoryList from '../Components/CategoryList';

const ItemListContainer = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredItems, setFilteredItems] = useState(items);

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    if (category) {
      const filtered = items.filter((item) => item.categoria === category);
      setFilteredItems(filtered);
    } else {
      setFilteredItems(items);
    }
  };

  // Obtén todas las categorías disponibles en los elementos
  const categories = Array.from(new Set(items.map((item) => item.categoria)));

  return (
    <div className="container">
      <div className="categoria-container">
        <CategoryList categories={categories} selectedCategory={selectedCategory} onSelectCategory={handleCategoryFilter} />
      </div>
      <div className="item-list-container">
        {filteredItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
