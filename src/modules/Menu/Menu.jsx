import React from 'react';
import { NavLink } from 'react-router-dom';

import './Menu.scss';

const Menu = () => {
  return (
    <nav className='dashboard-menu'>
      <ul>
        <li>
          <NavLink to='/dashboard/data' activeClassName='active'>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to='/dashboard/settings' activeClassName='active'>
            User Settings
          </NavLink>
        </li>
        <li>
          <NavLink to='/dashboard/moderation' activeClassName='active'>
            Blog Moderation
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
