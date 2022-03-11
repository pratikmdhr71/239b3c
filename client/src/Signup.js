import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { TextField, FormHelperText, FormControl } from '@material-ui/core';
import SwitchPage from './components/Common/SwitchPage';
import Layout from './components/Common/LoginSignupLayout';
import Form from './components/Common/Form';

const Signup = ({ user, register }) => {
  const history = useHistory();

  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const confirmPassword = formElements.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: 'Passwords must match' });
      return;
    }
    await register({ username, email, password });
  };

  useEffect(() => {
    if (user && user.id) history.push('/home');
  }, [user, history]);

  return (
    <Layout>
      <SwitchPage
        target="/login"
        btnText="Login"
        helperText="Already have an account?"
      />
      <Form
        headerText="Create an account"
        btnText="Create"
        onFormSubmit={handleRegister}
      >
        <TextField
          label="Username"
          aria-label="username"
          name="username"
          type="text"
          required
        />
        <TextField
          label="E-mail address"
          aria-label="email address"
          name="email"
          type="email"
          required
        />
        <FormControl error={!!formErrorMessage.confirmPassword}>
          <TextField
            aria-label="password"
            label="Password"
            type="password"
            inputProps={{ minLength: 6 }}
            name="password"
            required
          />
          <FormHelperText>{formErrorMessage.confirmPassword}</FormHelperText>
        </FormControl>
        <FormControl error={!!formErrorMessage.confirmPassword}>
          <TextField
            label="Confirm Password"
            aria-label="confirm password"
            type="password"
            inputProps={{ minLength: 6 }}
            name="confirmPassword"
            required
          />
          <FormHelperText>{formErrorMessage.confirmPassword}</FormHelperText>
        </FormControl>
      </Form>
    </Layout>
  );
};

export default Signup;
