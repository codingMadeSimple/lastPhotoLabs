import React from 'react';
import './App.scss';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  //Brings in state and functions that change state
  const {state, setModal, exitModal, setSelect, addFavorite, removeFavorite, setTopic}= useApplicationData();
  //Destruction of state object to access each state
  const {modal, select, favorite, photoData, topicData, topic} = state

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
      photos={photoData}
      topics={topicData}
      setTopic={setTopic}
      topic={topic}
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