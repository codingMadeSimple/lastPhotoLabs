import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {

  // console.log(props)
  const username = props.sampleDataForPhotoListItem.username;
  const imageSource = props.sampleDataForPhotoListItem.imageSource;
  const id = props.sampleDataForPhotoListItem.id;
  const location = props.sampleDataForPhotoListItem.location.city + " " + props.sampleDataForPhotoListItem.location.country;
  const profile = props.sampleDataForPhotoListItem.profile;



  return (
    <div className="photo-list__item">
      <img src={imageSource} className="photo-list__image" />
      <div className="photo-list__user-details">
        <img src={profile} className="photo-list__user-profile" />
        <div className="photo-list__user-info ">
          <div>{username}</div>
          <div className="photo-list__user-location">{location}</div>
        </div>
      </div>

    </div>
  );
};

export default PhotoListItem;
