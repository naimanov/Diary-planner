import React, { useState } from 'react';
import { auth } from '../../Firebase/firebase';
import { useHistory } from 'react-router-dom';

function SignInForm() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const signIn = async (email, password) => {
    auth.signInWithEmailAndPassword(email, password);
    await history.push('/home');
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <p>Введите логин</p>
      <input
        type='text'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p> Введите пароль </p>
      <input
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={() => signIn(email, password)}>Войти</button>
    </form>
  );
}

export default SignInForm;
