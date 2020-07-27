import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

import './Header.scss';

const Header = () => {
  const { logged } = useContext(UserContext);

  return (
    <header>
      <Link to='/'>Home</Link> |{' '}
      {logged === false ? (
        <Link to='/login'>Login</Link>
      ) : (
        <Link to='/logout'>Logout</Link>
      )}
    </header>
  );
};

export default Header;
