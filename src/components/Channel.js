import React from 'react';

const Channel = ({ data, setFavorite, favorits }) => {
  const favoriteHandler = () => {
    setFavorite([...favorits, data]);
  };
  return (
    <div className='cards-container'>
      <div className='card'>
        {/* <img alt="channel-img" /> */}
        <div className='container' onClick={favoriteHandler}>
          <small>{data.name}</small>
        </div>
      </div>
    </div>
  );
};

export default Channel;
