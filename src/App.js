import React, { Component } from 'react';
import {Switch, Route} from "react-router-dom";

import './App.css'

import Splash from './pages/SplashScreen';
import Signup from './pages/SignupScreen';
import Login from './pages/LoginScreen';

import Activities from './pages/ActivityScreen';
import ErrorPage from './pages/ErrorScreen';
import Rest from './pages/RestScreen';
import Break from './pages/LargeBreakScreen'

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
          <PrivateRoute exact path="/rest" component={Rest} />
          <PrivateRoute exact path="/break" component={Break} />

          <Route component={ErrorPage}/>
        </Switch>
      </div>
    )
  }
}

export default App;
