import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { Home } from "./views/Home";
import { About } from "./views/About";
import { TopicList } from "./views/TopicList";
import { NoMatch } from "./views/NoMatch";
import { BlogList } from "./views/BlogList";
import { TopicDetail } from "./components/TopicDetail";
import { NavBar } from "./components/NavBar";
import { BlogContent } from "./components/BlogContent";

export const Routes = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>

        <Route exact path="/About" component={About} />
        <Route exact path="/Topics" component={TopicList} />
        <Route exact path="/Blogs" component={BlogList} />

        <Route path="/Topics/:topicId" component={TopicDetail} />
        <Route path="/Blogs/:blogId" component={BlogContent} />

        <Route component={NoMatch} />
      </Switch>
    </div>
  );
};
