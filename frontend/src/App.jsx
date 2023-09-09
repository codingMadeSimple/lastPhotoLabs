import React from 'react';
import './App.scss';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { useState } from 'react';
import useApplicationData from 'hooks/useApplicationData';



// Note: Rendering a single component to build components in isolation
const App = () => {
  //Brings in state and functions that change state
  const {state, setModal, setSelect, setFavorite}= useApplicationData();
  //Destruction of state object to access each state
  const {modal, select, favorite} = state


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