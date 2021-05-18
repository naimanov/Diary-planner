import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../../Firebase/firebase';

function RegistrationForm() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const registration = async (email, password) => {
    auth.createUserWithEmailAndPassword(email, password);
    await console.log(auth.currentUser.uid);
    history.push('/home');
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
        <button onClick={() => registration(email, password)}>
          Регистрация
        </button>
      </form>
    </>
  );
}

export default RegistrationForm;
