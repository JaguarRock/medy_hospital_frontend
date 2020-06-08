import React, { useEffect, useState } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import history from "./helpers/history";
import { useDispatch, useSelector } from 'react-redux';
import alertActions from './actions/alert.actions';
import PrivateRoute from './components/PrivateRoute';
import { RootState } from './helpers/store';

function App() {
  
  const alert = useSelector(state => state.alertReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    history.listen((location, action) => {
      dispatch(alertActions.clear());
    })
  }, [])

  return (
    <div className="jumbotron">
      <div className="container">
        <div className="col-md-8 offset-md-2">
          {alert.message &&
            <div className={`alert ${alert.type}`}>{alert.message}</div>
          }
          <Router history={history}>
            <Switch>
              <PrivateRoute exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Redirect from="*" to="/" />
            </Switch>
          </Router>
        </div>
      </div>
    </div>

  )
}

export default App;
