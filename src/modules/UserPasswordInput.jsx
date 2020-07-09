import React, { useEffect, useContext } from 'react';
import { useInput } from '../hooks/useInput';
import { FormContext } from '../contexts/Form';

const UserPasswordInput = () => {
  const [userPassword, userPasswordInputHTML] = useInput({ type: 'password' });
  const { setInputValue } = useContext(FormContext);

  useEffect(() => {
    setInputValue('userPassword', userPassword);
  }, [setInputValue, userPassword]);

  return <>Password: {userPasswordInputHTML}</>;
};

export default UserPasswordInput;
