import React from 'react';

const CategoryList = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="categorias">
      <button
        className={`categoria-btn ${selectedCategory === null ? 'selected' : ''}`}
        onClick={() => onSelectCategory(null)}
      >
        Todas
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className={`categoria-btn ${selectedCategory === category ? 'selected' : ''}`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryList;
