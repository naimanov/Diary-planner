import React, { useState, useContext } from 'react';
import firebase from 'firebase';
import { AuthContext } from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';
import SignInForm from './SignInForm';
import RegistrationForm from './RegistrationForm';

function Authorization() {
  return (
    <div>
      <SignInForm />
      <RegistrationForm />
    </div>
  );
}

export default Authorization;
