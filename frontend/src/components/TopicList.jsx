import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";


const TopicList = (props) => {
  const topicArray = props.topics.map((topic)=> {
    return <TopicListItem
    key = {topic.id}
    topicID={topic.id}
    topic ={topic.title}
    setTopic={props.setTopic}
    onClick={()=> props.setTopic(topic.id)}
    />
  })


  return (
    <div className="top-nav-bar__topic-list">
      {topicArray}
    </div>
  );
};

export default TopicList;
