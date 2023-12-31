import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = (props) => {

  //This will pass in all of the information that is needed for the next component
  const PhotoArray = props.photos.map((photo) => {
    return <PhotoListItem
      key={photo.id}
      username={photo.user.username}
      imageSource={photo.urls.regular}
      fullPhoto={photo.urls.full}
      similarPhotos={photo.similar_photos}
      id={photo.id}
      location={photo.location.city + " " + photo.location.country}
      profile={photo.user.profile}
      favorite={props.favorite} 
      addFavorite={props.addFavorite}
      removeFavorite={props.removeFavorite}
      modal={props.modal}
      setModal={props.setModal}
      select ={props.select} 
      setSelect={props.setSelect}
      //Passed in photo for referencing state
      photo={photo}
    />;
  });

  return (
    <ul className="photo-list">
      {PhotoArray}
    </ul>
  );
};

export default PhotoList;
