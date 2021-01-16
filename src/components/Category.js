import React from 'react';

const Category = ({ cat, setFilter }) => {
  const filterHandler = () => {
    setFilter(cat.id);
  };

  return (
    <div className='cards-container'>
      <div className='card'>
        {/* <img alt="category-img" /> */}
        <div className='container' onClick={filterHandler}>
          {cat.name}
        </div>
      </div>
    </div>
  );
};

export default Category;
