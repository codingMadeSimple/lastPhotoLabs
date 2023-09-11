import React from 'react';
import './App.scss';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
import ShowFavoritesModal from 'routes/ShowFavoritesModal'

const App = () => {
  //Brings in state and functions that change state
  const {state, setModal, exitModal, setSelect, addFavorite, removeFavorite, setTopic, showFavorites, exitFavoritesModal} = useApplicationData();
  //Destruction of state object to access each state
  const {modal, select, favorite, photoData, topicData, topic, favoriteModal} = state

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
      showFavorites={showFavorites}
      />
      {modal && <PhotoDetailsModal 
      exitModal={exitModal}
      select ={select}
      favorite={favorite}
      addFavorite={addFavorite}
      removeFavorite={removeFavorite}
      />}
      {favoriteModal && <ShowFavoritesModal 
      photoData={photoData}
      exitModal={exitModal}
      select ={select}
      favorite={favorite}
      removeFavorite={removeFavorite}
      showFavorites={showFavorites}
      exitFavoritesModal={exitFavoritesModal}
      />}
    </div>
  );
};

export default App;