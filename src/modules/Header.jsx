import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      Hello, I'm <b>Header</b> component
      <p>
        Please <Link to='/login'>Login</Link> or go back to <Link to='/'>Home</Link>
      </p>
      <hr />
    </div>
  );
};

export default Header;
