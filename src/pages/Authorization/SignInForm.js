import React, { useState, useContext } from 'react';
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';

function SignInForm() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const signIn = async (email, password) => {
    try {
      firebase.auth().signInWithEmailAndPassword(email, password);
      let user = await firebase.auth().currentUser;
      history.push('/home');
    } catch (e) {
      console.log(e);
    }
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
