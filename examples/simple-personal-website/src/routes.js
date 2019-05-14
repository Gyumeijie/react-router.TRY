import React from "react";
import { Switch } from "react-router-dom";

import { Home } from "./views/Home";
import { About } from "./views/About";
import { TopicList } from "./views/TopicList";
import { NoMatch } from "./views/NoMatch";
import { BlogList } from "./views/BlogList";
import { NavBar } from "./components/NavBar";
import { BlogContent } from "./components/BlogContent";
import { TopicDetail } from "./components/TopicDetail";

import MakeRoutesWithSubRoutes from "./makeRoutesWithSubRoutes";

const routes = [
  {
    path: "/Home",
    component: Home,
  },
  {
    path: "/About",
    component: About,
  },
  {
    path: "/Topics",
    component: TopicList,
    routes: [
      {
        path: "/Topics/:topicId",
        component: TopicDetail
      }
    ]
  },
  {
    path: "/Blogs",
    component: BlogList,
    routes: [
      {
        path: "/Blogs/:blogId",
        component: BlogContent
      }
    ]
  },
  {
    /*The `:WhereTheHeckIsThat` is a variable because it has the colon before it.
     * And must be placed in the end.
     */
    path: "/:WhereTheHeckIsThat",
    component: NoMatch
  }
];

export const Routes = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        {routes.map(route => (
          <MakeRoutesWithSubRoutes {...route} />
        ))}
      </Switch>
    </div>
  );
};
