import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header/Header';
import Home from '../pages/Home';
import Login from '../pages/Login';
import UserProvider from '../contexts/UserContext';
import Dashboard from '../pages/Dashboard/Dashboard';
import Logout from '../modules/Logout';

const PageRouter = () => {
  return (
    <>
      <UserProvider>
        <Router>
          <Header />
          <div className='container'>
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>

              <Route exact path='/login'>
                <Login />
              </Route>

              <Route exact path='/logout'>
                <Logout />
              </Route>

              <Route path='/dashboard'>
                <Dashboard />
              </Route>
            </Switch>
          </div>
        </Router>
      </UserProvider>
    </>
  );
};

export default PageRouter;
