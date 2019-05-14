import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { Home } from "./views/Home";
import { About } from "./views/About";
import { TopicList } from "./views/TopicList";
import { NoMatch } from "./views/NoMatch";
import { BlogList } from "./views/BlogList";
import { NavBar } from "./components/NavBar";
import { BlogContent } from "./components/BlogContent";

export const Routes = () => {
  return (
    <div>
      <NavBar />
      {/*<Switch> is unique in that it renders a route exclusively*/}
      <Switch>
        {/*Bunch of <Route>s, every <Route> that matches the location
         renders inclusively. May cause maximum update depth exceeded.*/}

        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>

        {/*Its most basic responsibility is to render some UI when a location matches
         the route’s path. Corresponding UI will be rendered under <NavBar>.*/}
        <Route exact path="/About" component={About} />
        <Route exact path="/Topics" component={TopicList} />
        <Route exact path="/Blogs" component={BlogList} />

        {/*dynamic segments of the path: topicId blogId*/}
        <Route path="/Topics/:topicId" component={TopicList} />
        <Route path="/Blogs/:blogId" component={BlogContent} />

        <Route component={NoMatch} />
      </Switch>
    </div>
  );
};
