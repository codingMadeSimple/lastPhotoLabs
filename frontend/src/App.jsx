import React from 'react';
import './App.scss';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {
  //Brings in state and functions that change state
  const {state, setModal, exitModal, setSelect, addFavorite, removeFavorite}= useApplicationData();
  //Destruction of state object to access each state
  const {modal, select, favorite, photos, topics} = state

  // console.log(state)
  // console.log(setModal)

  return (
    <div className="App">
      <HomeRoute 
      modal={modal} 
      setModal={setModal} 
      select ={select} 
      setSelect={setSelect}
      favorite={favorite}
      addFavorite={addFavorite}
      removeFavorite={removeFavorite}
      photos={photos}
      topics={topics}
      />
      {modal && <PhotoDetailsModal 
      exitModal={exitModal}
      select ={select}
      favorite={favorite}
      addFavorite={addFavorite}
      removeFavorite={removeFavorite}
      />}
    </div>
  );
};

export default App;
{/* <TopNavigation/> */}

{/* <TopicList/> */}

{/* <PhotoList sampleDataForPhotoListItem={sampleDataForPhotoListItem}/> */}

{/* <PhotoListItem sampleDataForPhotoListItem={sampleDataForPhotoListItem}/> */}