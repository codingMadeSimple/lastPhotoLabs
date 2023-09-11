import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoListItem from 'components/PhotoListItem';
import '../styles/ShowFavoritesModal.scss'

const ShowFavoritesModal = (props) => {

const favoritePhotoObject=props.favorite.filter((photo)=> typeof photo==='object')

  console.log(favoritePhotoObject)

const PhotoArray = favoritePhotoObject.map((photo) => {
  return <PhotoListItem
    key={photo.id}
    username={photo.user.username}
    imageSource={photo.urls.regular}
    fullPhoto={photo.urls.full}
    similarPhotos={photo.similar_photos}
    id={photo.id}
    location={photo.location.city + " " + photo.location.country}
    profile={photo.user.profile}
    favorite={props.favorite} 
    addFavorite={props.addFavorite}
    removeFavorite={props.removeFavorite}
    modal={props.modal}
    setModal={props.setModal}
    select ={props.select} 
    setSelect={props.setSelect}
    //Passed in photo for referencing state
    photo={photo}
  />;
});

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={props.exitFavoritesModal} />
      </button>
      <div className="favorite-list">{PhotoArray}</div>

    </div>
  );
};

export default ShowFavoritesModal;
