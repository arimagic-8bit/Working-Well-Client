import React, { Component } from 'react';
import {Switch, Route} from "react-router-dom";

import Splash from './pages/SplashScreen';
import Signup from './pages/SignupScreen';
import Login from './pages/LoginScreen';

import Activities from './pages/ActivityScreen';
import Error from './pages/ErrorScreen'

import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';

class App extends Component {

  render(){
    return(
      <div className='App'>
        <Switch>
          <PublicRoute exact path="/" component={Splash}/>
          <PublicRoute exact path="/signup" component={Signup}/>
          <PublicRoute exact path="/login" component={Login}/>

          <PrivateRoute exact path="/activities" component={Activities}/>

          <Route component={Error}/>
        </Switch>
      </div>
    )
  }
}

export default App;
