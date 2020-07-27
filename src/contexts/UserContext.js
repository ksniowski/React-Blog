import React, { useState, useContext } from 'react';
import { Form } from './Form';
import avatar from '../data/img/avatar.jpg';

export const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [data, setData] = useState({
    name: 'Janusz',
    lastName: 'Kowalski',
    age: 56,
    email: 'janusz@kowalski.pl',
    avatarLink: avatar,
    blogPosts: 2,
    logged: true,
  });

  return (
    <UserContext.Provider value={{ ...data, setData }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserForm = ({ children }) => {
  const userData = useContext(UserContext);
  return <Form defaultValues={userData}>{children}</Form>;
};

export default UserProvider;
