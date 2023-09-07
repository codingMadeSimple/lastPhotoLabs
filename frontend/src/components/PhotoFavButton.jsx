import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  const [like, setLike] = useState(false);

  const handleClick = () => {
    //Changes color of icon
    setLike((prev) => !prev);

    //This will ad the id of the favorited photo to the photo array state
    props.setFavorite((prev) => {
      const favoritesArray = [...prev];
      if (favoritesArray.includes(props.id)) {
        const index = favoritesArray.indexOf(props.id);
        favoritesArray.splice(index, 1);
      } else {
        favoritesArray.push(props.id);
      }
      return favoritesArray;
    });
  };

  return (
    <div onClick={handleClick} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={like} />
      </div>
    </div>
  );
}

export default PhotoFavButton;