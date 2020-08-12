import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import DistCalc from "./components/DistCalc";
import TvSizeCalc from "./components/TvSizeCalc";
import FovCalc from "./components/FovCalc";

const routes = [
  {
    path: "/TvSizeCalc",
    exact: true,
    sidebar: () => <div>TV Size</div>,
    main: () => <TvSizeCalc />
  },
  {
    path: "/TvFov",
    sidebar: () => <div>TV FOV</div>,
    main: () => <FovCalc />
  },
  {
    path: "/DistToTV",
    sidebar: () => <div>Distance to TV</div>,
    main: () => <DistCalc />
  }
];

export default function TvApp() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "10px",
            width: "40%",
            background: "#f0f0f0"
          }}
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/TvSizeCalc">Size</Link>
            </li>
            <li>
            <Link to="/TvFov">TV FOV</Link>
            </li>
            <li>
            <Link to="/DistToTV">Distance to TV</Link>
            </li>
          </ul>

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

        <div style={{ flex: 1, padding: "10px" }}>
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
    </Router>
  );
}
