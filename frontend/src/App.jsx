import React from 'react';
import './App.scss';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { useState } from 'react';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [modal, setModal] = useState(false)
  const [select, setSelect] = useState({})

  return (
    <div className="App">
      <HomeRoute 
      modal={modal} 
      setModal={setModal} 
      select ={select} 
      setSelect={setSelect}
      />
      {modal && <PhotoDetailsModal setModal={setModal} select ={select}/>}
    </div>
  );
};

export default App;
{/* <TopNavigation/> */}

{/* <TopicList/> */}

{/* <PhotoList sampleDataForPhotoListItem={sampleDataForPhotoListItem}/> */}

{/* <PhotoListItem sampleDataForPhotoListItem={sampleDataForPhotoListItem}/> */}