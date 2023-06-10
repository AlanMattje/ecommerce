import React from 'react';

const CategoryList = ({ categories = [], selectedCategory, onSelectCategory }) => {
  return (
    <div className="categoria">
      <button key="Todas" className={selectedCategory === 'Todas' ? 'active' : ''} onClick={() => onSelectCategory('Todas')}>
        Todas
      </button>
      {categories.map((category, index) => (
        <button
          key={index}
          className={selectedCategory === category ? 'active' : ''}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryList;