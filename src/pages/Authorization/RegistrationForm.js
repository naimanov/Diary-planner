import React, { useState, useContext } from 'react';
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';

function RegistrationForm() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const login = async (email, password) => {
    try {
      firebase.auth().createUserWithEmailAndPassword(email, password);
      history.push('/home');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <h2>Registration</h2>
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
        <button onClick={() => login(email, password)}>Регистрация</button>
      </form>
    </>
  );
}

export default RegistrationForm;
