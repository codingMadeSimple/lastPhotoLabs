import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";





const PhotoListItem = (props) => {

// console.log(props)
const handleClick = () =>{
  const photo=props.photo
  props.setModal(true)
  props.setSelect([photo])
  // console.log("does this single prop show up", props.photo)
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
