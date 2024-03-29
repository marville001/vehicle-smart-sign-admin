import "react-app-polyfill/ie11"; // For IE 11 support
import "react-app-polyfill/stable";
import "core-js";
import "./polyfill";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { icons } from "./assets/icons";

import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./AuthContext";

React.icons = icons;

ReactDOM.render(
  <AuthProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </AuthProvider>,
  document.getElementById("root")
);
