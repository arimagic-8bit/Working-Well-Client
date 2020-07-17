import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./lib/AuthProvider";
import {ActivityProvider} from "./lib/ActivityProvider";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <Router>
    <AuthProvider>
    <ActivityProvider>
      <App />
      </ActivityProvider>
    </AuthProvider>
  </Router>,
  document.getElementById("root")
);
