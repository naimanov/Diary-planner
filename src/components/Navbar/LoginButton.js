import React from 'react';
import firebase from 'firebase';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';

function LoginButton() {
  const { auth } = useContext(AuthContext);
  const history = useHistory();

  const logout = () => {
    auth.signOut();
    history.push('/');
  };

  return (
    <button className='login-button' onClick={logout}>
      Выйти
    </button>
  );
}

export default LoginButton;
