import React from 'react';
import { Form } from '../contexts/Form';
import UserNameInput from '../modules/UserNameInput';
import UserPasswordInput from '../modules/UserPasswordInput';
import Button from '../atoms/Button';
import Users from '../data/users';
import { useHistory } from 'react-router-dom';

const LoginForm = () => {
  const history = useHistory();

  const onSubmit = (e, values) => {
    e.preventDefault();
    const { userName, userPassword } = values;

    if (!userName || !userPassword) {
      alert('All fields are required!');
    } else if (userName === Users.login && userPassword === Users.password) {
      history.push('/dashboard');
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
