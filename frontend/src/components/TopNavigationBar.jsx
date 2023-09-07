import React from 'react';
import '../styles/TopNavigationBar.scss';

import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={props.topics} />
      <FavBadge isFavPhotoExist={props.favorite.length > 0 ? true : false} />
    </div>
  );
};

export default TopNavigation;

//FavBadge, used ternary to check if there is anything in the favorite state array 