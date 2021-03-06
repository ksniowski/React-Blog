import React, { useState, useCallback, useEffect } from 'react';

export const FormContext = React.createContext();

export const Form = ({ children, onSubmit, defaultValues }) => {
  const [formValues, setFormValues] = useState(defaultValues);

  useEffect(() => {
    setFormValues(defaultValues);
  }, [defaultValues]);

  const setInputValue = useCallback((name, value) => {
    if (name === '' || name === undefined) {
      throw Error('Missing input name!');
    }

    setFormValues((state) => ({
      ...state,
      [name]: value,
    }));
  }, []);

  const defaultSubmit = () => {
    return true;
  };

  return (
    <FormContext.Provider value={{ ...formValues, setInputValue }}>
      <form
        onSubmit={(e) => (onSubmit ? onSubmit(e, formValues) : defaultSubmit())}
      >
        {children}
      </form>
    </FormContext.Provider>
  );
};
