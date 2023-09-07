import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";




const PhotoListItem = (props) => {

  return (
    <div className="photo-list__item">
      <PhotoFavButton/>
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
