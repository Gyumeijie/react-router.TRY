import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ match }) => {
  console.log(match.url);
  return (
    <React.Fragment>
      <h3> Blog List View</h3>
      <ul>
        <li>
          <Link to={`${match.url}/Blog1`}>Blog 1</Link>
        </li>
        <li>
          <Link to={`${match.url}/Blog2`}>Blog 2</Link>
        </li>
        <li>
          <Link to={`${match.url}/Blog3`}>Blog 3</Link>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default BlogList;
