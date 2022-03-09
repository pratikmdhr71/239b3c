import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import ButtonStyled from './components/Common/ButtonStyled';
import Layout from './components/Common/LoginSignupLayout';

const signupFormDetails = {
  formType: 'signup',
  headerText: 'Create an account',
  inputFields: [
    { id: 0, name: 'username', label: 'Username', inputType: 'text' },
    { id: 1, name: 'email', label: 'E-mail address', inputType: 'email' },
    { id: 2, name: 'password', label: 'Password', inputType: 'password' },
    {
      id: 3,
      name: 'confirmPassword',
      label: 'Confirm Password',
      inputType: 'password'
    }
  ],
  passwordLength: 6,
  submitBtnText: 'Create'
};

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

  const SwitchToLoginComponent = (
    <>
      <Typography variant="body2">Already have an account?</Typography>
      <Link href="/login" to="/login">
        <ButtonStyled btnStyle="secondary">Login</ButtonStyled>
      </Link>
    </>
  );

  useEffect(() => {
    if (user && user.id) history.push('/home');
  }, [user, history]);

  return (
    <Layout
      switchPageContent={SwitchToLoginComponent}
      formDetails={signupFormDetails}
      passwordErrorMessage={formErrorMessage.confirmPassword}
      onFormSubmit={handleRegister}
    ></Layout>
  );
};

export default Signup;
