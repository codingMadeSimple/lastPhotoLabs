import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigation/>
      <PhotoList sampleDataForPhotoListItem={props.sampleDataForPhotoListItem}/>
    </div>
  );
};

export default HomeRoute;
