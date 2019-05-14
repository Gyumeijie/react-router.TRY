import React from "react";
import { Link, Route } from "react-router-dom";

const topics = [
  { id: 0, name: "Topic 1", relatedTopics: [1, 2, 3] },
  { id: 1, name: "Topic 2", relatedTopics: [0, 3] },
  { id: 2, name: "Topic 3", relatedTopics: [0, 1, 3] },
  { id: 3, name: "Topic 4", relatedTopics: [1, 2] }
];

const find = id => topics.find(item => item.id === parseInt(id, 10));

const TopicDetail = ({ match }) => {
  const topic = find(match.params.id);
  console.log("match: ", match);

  return (
    <div>
      <h3>{topic.name} Details</h3>
      <h4>INFO: This is the info about {topic.name} </h4>
      <h4>Related Topics</h4>
      <ul>
        {topic.relatedTopics.map(id => (
          <li key={id}>
            {/*Provides declarative, accessible navigation around your application,
              but can't add styling attributes contrary to <NavLink>*/}
            <Link to={`${match.url}/${id}`}>{find(id).name}</Link>
          </li>
        ))}
      </ul>
      <hr />
      {/*Its most basic responsibility is to render some UI when a location matches
       the route’s path. Corresponding UI will be rendered here.*/}
      <Route path={`${match.url}/:id`} component={TopicDetail} />
    </div>
  );
};

const TopicList = () => <TopicDetail match={{ params: { id: 0 }, url: "/Topics" }} />;

export default TopicList;
