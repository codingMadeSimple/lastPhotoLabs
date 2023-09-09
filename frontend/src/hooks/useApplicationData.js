import { useState } from "react";

export default function useApplicationData () {

  //Modal state
  const [modal, setModal] = useState(false)
  //Selecting a photo state
  const [select, setSelect] = useState(null)
  //Setting a favorite 
  const [favorite, setFavorite] = useState([]);

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
      setSelect,
      setFavorite
    }
  )
}