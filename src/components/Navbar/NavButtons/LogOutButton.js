import React from 'react';
import { auth } from '../../../Firebase/firebase';
import { useHistory } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';

function LoginButton() {
  const history = useHistory();

  const logout = () => {
    auth.signOut();
    history.push('/auth');
  };

  return (
    <button className='logout-button' onClick={logout}>
      <BiLogOut />
    </button>
  );
}

export default LoginButton;
