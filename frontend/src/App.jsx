import React from 'react';
import './App.scss';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { useState } from 'react';

// Note: Rendering a single component to build components in isolation
const App = () => {

  //Modal state
  const [modal, setModal] = useState(false)
  //Selecting a photo state
  const [select, setSelect] = useState(null)
  //Selecting favorite button
  const [favorite, setFavorite] = useState([]);

  return (
    <div className="App">
      <HomeRoute 
      modal={modal} 
      setModal={setModal} 
      select ={select} 
      setSelect={setSelect}
      favorite={favorite}
      setFavorite={setFavorite}
      />
      {modal && <PhotoDetailsModal 
      setModal={setModal} 
      select ={select}
      favorite={favorite}
      setFavorite={setFavorite}
      />}
    </div>
  );
};

export default App;
{/* <TopNavigation/> */}

{/* <TopicList/> */}

{/* <PhotoList sampleDataForPhotoListItem={sampleDataForPhotoListItem}/> */}

{/* <PhotoListItem sampleDataForPhotoListItem={sampleDataForPhotoListItem}/> */}