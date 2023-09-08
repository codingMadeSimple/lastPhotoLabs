import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import { useState } from 'react';


const HomeRoute = (props) => {

  const [favorite, setFavorite] = useState([]);

  return (
    <div className="home-route">
      <TopNavigation 
      topics={topics} 
      favorite={favorite}/>
      <PhotoList 
      photos={photos} 
      favorite={favorite} 
      setFavorite={setFavorite} 
      modal={props.modal} 
      setModal={props.setModal} 
      select ={props.select} 
      setSelect={props.setSelect}
      />
    </div>
  );
};

export default HomeRoute;
