import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import avatar from '../data/img/avatar.jpg';

const Logout = () => {
  const { setData } = useContext(UserContext);

  setData({
    name: 'Janusz',
    lastName: 'Kowalski',
    age: 56,
    email: 'janusz@kowalski.pl',
    avatarLink: avatar,
    blogPosts: 2,
    logged: false,
  });

  return <Redirect to='/login' />;
};

export default Logout;
