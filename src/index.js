import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import CATEGORIES from './categories';
import CHANNELS from './channels';
import Header from './components/Header';
import Category from './components/Category';
import Channel from './components/Channel';
import Favorite from './components/Favorite';
import './styles.scss';

// Step 1: render list of categories in a left column

// Step 2: onClick of a category updates the right column with associated channel names
// a) render list of channels
// b) filter channel list by categoryID

// If time allows...
// Step 3: allow user to favorite a channel
//         which will create a favorite category if it does not exist.

const App = () => {
  const [cats, setCat] = useState([]);
  const [channels, setChannel] = useState([]);
  const [filter, setFilter] = useState();
  const [favorits, setFavorite] = useState([]);

  const catData = Object.keys(CATEGORIES).map((catName) => CATEGORIES[catName]);
  const channelData = Object.keys(CHANNELS).map(
    (channelName) => CHANNELS[channelName]
  );

  useEffect(() => {
    setCat(catData);
    filter ? setChannel(catFilter) : setChannel(channelData);
  }, [filter]);

  const catFilter = channelData.filter((ch) => ch.categoryID === filter);

  return (
    <div className='app-container'>
      <Header />
      <div className='content-container'>
        <section className='categories-container'>
          <h3>Categories</h3>
          {cats.map((cat) => (
            <Category cat={cat} key={cat.ID} setFilter={setFilter} />
          ))}
        </section>
        <section className='channels-container'>
          <h3>Channels</h3>
          {channels.length === 0 ? (
            <p className='error'>There is no Channels for this Category</p>
          ) : (
            channels.map((channel) => (
              <Channel
                data={channel}
                key={channel.ID}
                favorits={favorits}
                setFavorite={setFavorite}
              />
            ))
          )}
          {}
        </section>

        <section className='channels-container'>
          <h3>Favorites Channels</h3>
          {favorits.length === 0 ? (
            <p className='error'>
              Click on the channel to add it ad favorites{' '}
            </p>
          ) : (
            favorits.map((fav) => <Favorite data={fav} key={fav.id} />)
          )}
        </section>
      </div>
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
