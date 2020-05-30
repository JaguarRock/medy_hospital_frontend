<<<<<<< HEAD
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/register" component={Register} />
        {/* <Route path="/profile" component={Profile} /> */}
      </Switch>
    </Router>
  )
}

export default App;
=======
import React, { useEffect } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { history } from './helpers/history';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';

export default function App() {
  return (
    <div className="jumbotron">
      <div className="container">
        <div className="col-md-8 offset-md-2">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/login" component={LoginPage}/>
              <Route path="/register" component={RegisterPage}/>
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    </div>
  )
}
>>>>>>> 5a1a372cd55785e310472f61997af5f6023cc910
