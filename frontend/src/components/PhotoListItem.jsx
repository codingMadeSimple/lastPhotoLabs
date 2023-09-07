import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";





const PhotoListItem = (props) => {
// console.log(props)

const handleClick = () =>{

  props.setModal(true)

}

  return (
    <div className="photo-list__item" onClick={handleClick}>
      <PhotoFavButton favorite={props.favorite} setFavorite={props.setFavorite} id={props.id}/>
      <img src={props.imageSource} className="photo-list__image" />
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
