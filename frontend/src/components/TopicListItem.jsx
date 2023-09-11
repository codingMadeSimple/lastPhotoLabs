import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const id = props.topicID;

  const handleTopicClick = () => {
    props.onClick(id);
  };

  return (
    <div className="topic-list__item" onClick={handleTopicClick}>
      <span>
        {props.topic}
      </span>
    </div>
  );
};

export default TopicListItem;
