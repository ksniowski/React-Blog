import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Redirect } from 'react-router-dom';
import LoginForm from '../modules/LoginForm';

const Login = () => {
  const { logged } = useContext(UserContext);

  return (
    <div>
      <h1>Please login</h1>
      <hr />
      {logged === true ? <Redirect to='/dashboard/data' /> : <LoginForm />}
    </div>
  );
};

export default Login;
