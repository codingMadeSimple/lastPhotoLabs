import { useState } from "react";

export const ACTIONS ={

  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'

}

export default function useApplicationData () {

  //Modal state
  const [modal, setModal] = useState(false)
  //Selecting a photo state
  const [select, setSelect] = useState(null)
  //Setting a favorite 
  const [favorite, setFavorite] = useState([]);
  //Exits modal
  const exitModal=()=>{
    setModal(false)
  }

  //Object of states
  const state ={
    modal,
    select,
    favorite
  }

  return (
    //Outputs the state object and the functions to change the states
    {
      state,
      setModal,
      exitModal,
      setSelect,
      setFavorite
    }
  )
}