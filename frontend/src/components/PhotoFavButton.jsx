import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  //Checks if the favorite already exists and either removes or adds it depending on if it exists already
  const handleClick = () => {
    if (!props.favorite.includes(props.photo.id)) {
      props.addFavorite(props.photo.id);
    } else {
      props.removeFavorite(props.photo.id);
    }
  };

  return (
    <div onClick={handleClick} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon
          selected={props.favorite.includes(props.photo.id)}
        />
      </div>
    </div>
  );
}

export default PhotoFavButton;