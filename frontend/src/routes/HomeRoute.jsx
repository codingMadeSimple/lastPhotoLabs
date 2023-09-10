import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

import { useState } from 'react';


const HomeRoute = (props) => {

  // console.log(props)

  return (
    <div className="home-route">
      <TopNavigation 
      topics={props.topics} 
      favorite={props.favorite}
      setTopic={props.setTopic}
      />
      <PhotoList 
      photos={props.photos} 
      favorite={props.favorite} 
      addFavorite={props.addFavorite} 
      modal={props.modal} 
      setModal={props.setModal} 
      select ={props.select} 
      setSelect={props.setSelect}
      removeFavorite={props.removeFavorite}
      topic={props.topic}
      setTopic={props.setTopic}
      />
    </div>
  );
};

export default HomeRoute;
