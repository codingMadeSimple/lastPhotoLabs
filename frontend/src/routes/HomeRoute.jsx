import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import { useState } from 'react';


const HomeRoute = (props) => {

  // console.log(props)

  return (
    <div className="home-route">
      <TopNavigation 
      topics={topics} 
      favorite={props.favorite}/>
      <PhotoList 
      photos={photos} 
      favorite={props.favorite} 
      addFavorite={props.addFavorite} 
      modal={props.modal} 
      setModal={props.setModal} 
      select ={props.select} 
      setSelect={props.setSelect}
      removeFavorite={props.removeFavorite}
      />
    </div>
  );
};

export default HomeRoute;
