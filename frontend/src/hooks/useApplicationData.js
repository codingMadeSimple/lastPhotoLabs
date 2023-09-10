import { useState, useReducer, useEffect } from "react";
import photos from "mocks/photos";
import topics from "mocks/topics";

export const ACTIONS = {

  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  GET_PHOTOS_BY_TOPIC: 'GET_PHOTOS_BY_TOPIC'
};


function reducer(state, action) {
  // console.log("STATE", state, "ACTION", action);
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      // WIll return an object that olds the old state, and a favorite array with the added favorite id
      return { ...state, favorite: [...state.favorite, action.payload.id] };
    case ACTIONS.FAV_PHOTO_REMOVED:
      //Set up newArray that holds all of the current favorites
      const newArray = [...state.favorite];
      //Checks if the newArray includes the id of the clicked liked photo
      if (newArray.includes(action.payload.id)) {
        //Finds the index of the clicked id and then removes it from the array
        const index = newArray.indexOf(action.payload.id);
        newArray.splice(index, 1);
      }
      return { ...state, favorite: newArray };

    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };

    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };

    case ACTIONS.SELECT_PHOTO:
      return { ...state, select: action.payload.select };

    // case ACTIONS.DISPLAY_PHOTO_DETAILS:
    //   return {state};

    case ACTIONS.GET_PHOTOS_BY_TOPIC:
      return { ...state, topic: action.payload.id };

    case ACTIONS.OPEN_MODAL:
      return { ...state, modal: true };

    case ACTIONS.CLOSE_MODAL:
      return { ...state, modal: false };


    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}



export default function useApplicationData() {

  const [state, dispatch] = useReducer(reducer, {
    modal: false,
    select: null,
    favorite: [],
    photoData: [],
    topicData: [],
    topic: null
  });

  // console.log(state);

  const addFavorite = (id) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id: id } });
  };

  const removeFavorite = (id) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id: id } });
  };

  const setSelect = (select) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { select: select } });
  };

  const setModal = () => {
    dispatch({ type: ACTIONS.OPEN_MODAL });
  };

  const exitModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  const setTopic = (topic_id) => {
    return fetch(`http://localhost:8001/api/topics/photos/${topic_id}`)
    .then(res=>res.json())
    .then((data)=>{
      console.log(data)
      dispatch({type: ACTIONS.GET_PHOTOS_BY_TOPIC, payload: data });
  }).catch((error) => {
    console.error("Error while fetching the topic ID data:", error);
  });
};

  //API route for fetching photos from database
  useEffect(() => {
    fetch('http://localhost:8001/api/photos')
      .then(res => res.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
      .catch((error) => {
        console.error("Error while fetching the photo data:", error);
      });
    //API route for fetching photos from database
    fetch('http://localhost:8001/api/topics')
      .then(res => res.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
      .catch((error) => {
        console.error("Error while fetching the topic data:", error);
      })
      
  }, []);
  //API route for fetching photos with a specific topic
  // useEffect(() => {
  //   fetch('http://localhost:8001/api/topics/photos/:topic_id')
  //     .then(res => res.json())
  //     .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }));
  // }, []);

  return (
    //Outputs the state object and the functions to change the states
    {
      state,
      addFavorite,
      removeFavorite,
      setModal,
      exitModal,
      setSelect,
      setTopic
    }
  );
}