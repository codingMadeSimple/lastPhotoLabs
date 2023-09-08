import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {

  console.log(props)

  const exitModal=()=>{
    props.setModal(false)
  }

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={exitModal}/>
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
