import React from 'react';

const Favorite = ({ data }) => {
  return (
    <div className='cards-container'>
      <div className='card'>
        {/* <img alt="channel-img" /> */}
        <div className='container'>
          <small>{data.name}</small>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
