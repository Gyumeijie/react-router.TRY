// 'React' must be in scope when using JSX
import React from "react";
import ReactDOM from "react-dom";

/*<BrowserRouter>: A <Router> that uses the HTML5 history API 
(pushState, replaceState and the popstate event) to keep your 
 UI in sync with the URL.*/
 import { BrowserRouter as Router } from "react-router-dom";

 /*<HashRouter>: A <Router> that uses the hash portion of the URL 
 i.e. window.location.hash to keep your UI in sync with the URL.*/


// import { HashRouter as Router } from "react-router-dom";

// where we are going to specify our routes
import { Routes } from "./routes";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Router>
    <Routes />
  </Router>,
  document.getElementById("root")
);

registerServiceWorker();
