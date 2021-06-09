import React from 'react';
import { auth } from '../../../Firebase/firebase';
import { useHistory } from 'react-router-dom';

function LoginButton() {
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
