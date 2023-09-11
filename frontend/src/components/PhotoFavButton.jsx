import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {


  const handleClick = () => {

    console.log(props.photo.id)

    if (!props.favorite.includes(props.photo.id)) {
      props.addFavorite(props.photo.id);
    } else {
      props.removeFavorite(props.photo.id);
    }

  };

  return (
    <div onClick={handleClick} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={props.favorite.includes(props.photo.id)} />
      </div>
    </div>
  );
}

export default PhotoFavButton;


// This was the old addFavorite state

// props.addFavorite((prev) => {
//   const favoritesArray = [...prev];
//   if (favoritesArray.includes(props.id)) {
//     const index = favoritesArray.indexOf(props.id);
//     favoritesArray.splice(index, 1);
//   } else {
//     favoritesArray.push(props.id);
//   }
//   return favoritesArray;
// });