import React from "react";
import { Route } from "react-router-dom";

const MakeRoutesWithSubRoutes = route => {
  console.log("route:", route);
  return (
    /* There are 3 ways to render something with a <Route>:
     *   - <Route component>
     *   - <Route render>
     *   - <Route children>
     * All three render methods will be passed the same three route props
     *   - match
     *   - location
     *   - history
     */

    <Route
      path={route.path}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  );
};

export default MakeRoutesWithSubRoutes;
