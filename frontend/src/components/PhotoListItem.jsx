import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {

  const username = props.sampleDataForPhotoListItem.username;
  const imageSource = props.sampleDataForPhotoListItem.imageSource;
  const id = props.sampleDataForPhotoListItem.id;
  const location = props.sampleDataForPhotoListItem.location.city + " " + props.sampleDataForPhotoListItem.location.country;
  const profile = props.sampleDataForPhotoListItem.profile;



  return (
    <div>
      <img src={imageSource} />
      <img src={profile} />
      <div>{username}</div>
      <div>{location}</div>
    </div>
  );
};

export default PhotoListItem;
