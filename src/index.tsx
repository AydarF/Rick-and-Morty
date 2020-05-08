import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { StoreProvider } from "./Store";
import { Router, RouteComponentProps } from "@reach/router";

import App from "./App";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <Router>
        <App path="/">
          <RouterPage pageComponent={<Home />} path="/" />
          <RouterPage pageComponent={<Favorite />} path="/favorite" />
        </App>
      </Router>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
