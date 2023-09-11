import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {

  const handleClick = () => {
    const photo = props.photo;
    //Opens modal for clicked photo
    props.setModal(true);
    //Sets the data for the clicked photo to be used by modal
    props.setSelect([photo]);
  };

  return (
    <div className="photo-list__item" >
      <PhotoFavButton
        favorite={props.favorite}
        addFavorite={props.addFavorite}
        id={props.id}
        removeFavorite={props.removeFavorite}
        photo={props.photo}
      />
      <img src={props.imageSource} className="photo-list__image" onClick={handleClick} />
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
