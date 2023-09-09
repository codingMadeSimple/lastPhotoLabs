import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {

  //The modal selected photo id
  const id = props.select[0].id;

  //This will make the data from similar phots which is an object of objects and format it so that it can be used again with the PhotoList component
  const photos = Object.values(props.select[0].similar_photos);


  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={props.exitModal} />
      </button>
      <PhotoFavButton id={id} favorite={props.favorite} addFavorite={props.addFavorite} removeFavorite={props.removeFavorite} />
      <img className="photo-details-modal__image" src={props.select[0].urls.full} />
      <PhotoList photos={photos} favorite={props.favorite} addFavorite={props.addFavorite} removeFavorite={props.removeFavorite} />
    </div>
  );
};

export default PhotoDetailsModal;
