import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./lib/AuthProvider";
import {ActProvider} from "./lib/ActivityProvider";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <Router>
    <AuthProvider>
    <ActProvider>
      <App />
      </ActProvider>
    </AuthProvider>
  </Router>,
  document.getElementById("root")
);
