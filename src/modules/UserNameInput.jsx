import React, { useEffect, useContext } from 'react';
import { useInput } from '../hooks/useInput';
import { FormContext } from '../contexts/Form';

const UserNameInput = () => {
  const [userName, userNameInputHTML] = useInput({ type: 'text' });
  const { setInputValue } = useContext(FormContext);

  useEffect(() => {
    setInputValue('userName', userName);
  }, [setInputValue, userName]);

  return <>Login: {userNameInputHTML}</>;
};

export default UserNameInput;
