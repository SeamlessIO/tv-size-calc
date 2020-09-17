import React, {  } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LinkButton from './components/LinkButton'

import DistCalc from "./components/DistCalc";
import TvSizeCalc from "./components/TvSizeCalc";
import FovCalc from "./components/FovCalc";

const routes = [
  {
    path: "/TvSizeCalc",
    exact: true,
    sidebar: () => <h3>Calculate TV Size</h3>,
    main: () => <TvSizeCalc />
  },
  {
    path: "/TvFov",
    sidebar: () => <h3>Calculate TV Field of View</h3>,
    main: () => <FovCalc />
  },
  {
    path: "/DistToTV",
    sidebar: () => <h3>Calculate Distance to TV</h3>,
    main: () => <DistCalc />
  }
];

export default function TvApp() {
  return (
    <Router>
      <div className="App">
        <div>
        <h2>What to Calculate?</h2>
      
            <LinkButton to="/TvSizeCalc">TV Size</LinkButton>
      
            <LinkButton to="/TvFov">TV Field of View</LinkButton>
     
            <LinkButton to="/DistToTV">Distance to TV</LinkButton>
       
<hr />
          <Switch>
            {routes.map((route, index) => (
              // You can render a <Route> in as many places
              // as you want in your app. It will render along
              // with any other <Route>s that also match the URL.
              // So, a sidebar or breadcrumbs or anything else
              // that requires you to render multiple things
              // in multiple places at the same URL is nothing
              // more than multiple <Route>s.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
            ))}
          </Switch>
        </div>

        <div>
          <Switch>
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
      <a href ="https://github.com/akjems/tv-size-calc"> Github </a>
    </Router>
  );
}
