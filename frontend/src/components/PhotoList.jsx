import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = (props) => {

  // console.log(props)

  const PhotoArray = props.photos.map((photo) => {
    return <PhotoListItem
      key={photo.id}
      username={photo.user.username}
      imageSource={photo.urls.regular}
      fullPhoto={photo.urls.full}
      similarPhotos={photo.similar_photos}
      id={photo.user.id}
      location={photo.location.city + " " + photo.location.country}
      profile={photo.user.profile}
      favorite={props.favorite} 
      setFavorite={props.setFavorite}
      modal={props.modal}
      setModal={props.setModal}
      select ={props.select} 
      setSelect={props.setSelect}
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
