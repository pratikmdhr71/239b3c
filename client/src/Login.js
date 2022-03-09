import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import ButtonStyled from './components/Common/ButtonStyled';
import Layout from './components/Common/LoginSignupLayout';

const loginFormDetails = {
  formType: 'login',
  headerText: 'Welcome back!',
  inputFields: [
    { id: 0, name: 'username', label: 'Username', inputType: 'text' },
    { id: 1, name: 'password', label: 'Password', inputType: 'password' }
  ],
  submitBtnText: 'Login'
};

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

  const SwitchToSignupComponent = (
    <>
      <Typography variant="body2">Don't have an account?</Typography>
      <Link href="/register" to="/register">
        <ButtonStyled btnStyle="secondary">Create Account</ButtonStyled>
      </Link>
    </>
  );

  useEffect(() => {
    if (user && user.id) history.push('/home');
  }, [user, history]);

  return (
    <Layout
      switchPageContent={SwitchToSignupComponent}
      formDetails={loginFormDetails}
      onFormSubmit={handleLogin}
    ></Layout>
  );
};

export default Login;
