import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = (props) => {

  //This will make the data from similar phots which is an object of objects and format it so that it can be used again with the PhotoList component
  const photos = Object.values(props.select[0].similar_photos)

  const exitModal=()=>{
    props.setModal(false)
  }

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={exitModal}/>
      </button>
      <img className="photo-details-modal__image" src={props.select[0].urls.full} />
      <PhotoList photos={photos}/>
    </div>
  )
};

export default PhotoDetailsModal;
