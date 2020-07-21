import React, { Component } from "react";
import { Switch } from "react-router-dom";

import "./App.css";

import Splash from "./pages/SplashScreen";
import Signup from "./pages/SignupScreen";
import Login from "./pages/LoginScreen";

import Activities from "./pages/ActivityScreen";
import Rest from "./pages/RestScreen";
import Break from "./pages/LargeBreakScreen";
import TimerWork from "./components/TimerWork";
import TimerRest from "./components/TimerRest";
import TimerFinal from "./components/FinalTimer";

import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <PublicRoute exact path="/" component={Splash} />
          <PublicRoute exact path="/signup" component={Signup} />
          <PublicRoute exact path="/login" component={Login} />

          <PrivateRoute exact path="/activities" component={Activities} />
          <PrivateRoute exact path="/rest" component={Rest} />
          <PrivateRoute exact path="/break" component={Break} />
          <PrivateRoute exact path="/timerWork" component={TimerWork} />
          <PrivateRoute exact path="/timerRest" component={TimerRest} />
          <PrivateRoute exact path="/timerFinal" component={TimerFinal} />
        </Switch>
      </div>
    );
  }
}

export default App;
