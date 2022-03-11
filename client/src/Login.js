import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { InputAdornment, TextField, FormControl } from '@material-ui/core';
import SwitchPage from './components/Common/SwitchPage';
import Layout from './components/Common/LoginSignupLayout';
import Form from './components/Common/Form';

const Login = ({ user, login }) => {
  const history = useHistory();
  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const password = formElements.password.value;

    await login({ username, password });
  };

  useEffect(() => {
    if (user && user.id) history.push('/home');
  }, [user, history]);

  return (
    <Layout>
      <SwitchPage
        target="/register"
        btnText="Create Account"
        helperText="Don't have an account?"
      />
      <Form
        headerText="Welcome back!"
        btnText="Login"
        onFormSubmit={handleLogin}
      >
        <FormControl required>
          <TextField
            label="Username"
            aria-label="username"
            name="username"
            type="text"
          />
        </FormControl>
        <FormControl required>
          <TextField
            label="Password"
            aria-label="password"
            name="password"
            type="password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Link href="/register" to="/register">
                    Forgot?
                  </Link>
                </InputAdornment>
              )
            }}
          />
        </FormControl>
      </Form>
    </Layout>
  );
};

export default Login;
