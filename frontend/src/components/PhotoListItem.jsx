import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";





const PhotoListItem = (props) => {
// console.log(props)

const handleClick = () =>{
  props.setModal(true)

  props.setSelect({
    key:props.id,
    username : props.username,
    imageSource : props.imageSource,
    fullPhoto : props.fullPhoto,
    similarPhotos : props.similarPhotos,
    id : props.id,
    location : props.location.city + " " + props.location.country,
    profile : props.profile
  })
}
  return (
    <div className="photo-list__item" >
      <PhotoFavButton favorite={props.favorite} setFavorite={props.setFavorite} id={props.id}/>
      <img src={props.imageSource} className="photo-list__image" onClick={handleClick}/>
      <div className="photo-list__user-details">
        <img src={props.profile} className="photo-list__user-profile" />
        <div className="photo-list__user-info ">
          <div>{props.username}</div>
          <div className="photo-list__user-location">{props.location}</div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
