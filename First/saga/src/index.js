import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import { history } from "./redux/reducers";
import "./index.css";
import { App } from "./pages/App";
import { Blog } from "./pages/Blog";
import store from "./redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route exact path="/blog" element={<Blog />} />
        </Routes>
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
