import React from 'react';
import { BrowserRouter as Route, Switch } from 'react-router-dom';
import Menu from '../../modules/Menu/Menu';
import UserDetails from '../../modules/UserDetails/UserDetails';
import Settings from '../Settings';
import AddPost from '../AddPost';

const Dashboard = () => {
  return (
    <>
      <Menu />

      <Switch>
        <Route exact path='/dashboard/data'>
          <UserDetails />
        </Route>
        <Route exact path='/dashboard/settings'>
          <Settings />
        </Route>
        <Route exact path='/dashboard/moderation'>
          <AddPost />
        </Route>
      </Switch>
    </>
  );
};

export default Dashboard;
