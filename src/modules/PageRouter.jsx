import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../modules/Header';
import Home from '../pages/Home';
import Login from '../pages/Login';

const PageRouter = () => {
  return (
    <>
      <Router>
        <Header />
        <div className='container'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default PageRouter;
