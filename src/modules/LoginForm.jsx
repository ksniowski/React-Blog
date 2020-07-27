import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Form } from '../contexts/Form';
import UserNameInput from '../modules/UserNameInput';
import UserPasswordInput from '../modules/UserPasswordInput';
import Button from '../atoms/Button';
import Users from '../data/assets/users';
import { useHistory } from 'react-router-dom';
import avatar from '../data/img/avatar.jpg';

const LoginForm = () => {
  const history = useHistory();
  const { setData } = useContext(UserContext);

  const onSubmit = (e, values) => {
    e.preventDefault();
    const { userName, userPassword } = values;

    if (!userName || !userPassword) {
      alert('All fields are required!');
    } else if (userName === Users.login && userPassword === Users.password) {
      history.push('/dashboard/data');

      setData({
        name: 'Janusz',
        lastName: 'Kowalski',
        age: 56,
        email: 'janusz@kowalski.pl',
        avatarLink: avatar,
        blogPosts: 2,
        logged: true,
      });
    } else {
      alert('Wrong data!');
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <UserNameInput />
      <br />
      <UserPasswordInput />
      <br />
      <Button type='submit' label='Login' />
    </Form>
  );
};

export default LoginForm;
