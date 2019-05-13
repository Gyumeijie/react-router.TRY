import React from "react";
import { Link } from "react-router-dom";

const BlogContent = ({ match }) => {
  console.log(match);
  return (
    <React.Fragment>
      <h3>{match.params.blogId}</h3>
      <ul>
        <li>
          <Link to={"/Blogs"}>back to Blogs</Link>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default BlogContent;
