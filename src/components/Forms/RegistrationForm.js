import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { auth } from '../../Firebase/firebase';
import firebase from 'firebase/app';
import Form from './Form';
import FormError from './FormError';

function RegistrationForm() {
  const history = useHistory();
  const [isError, setIsError] = useState(false);
  const [errorText, setErrorText] = useState('');

  const registration = async (email, password, remember) => {
    try {
      if (!remember) {
        auth.setPersistence(firebase.auth.Auth.Persistence.SESSION);
      }
      await auth.createUserWithEmailAndPassword(email, password);
      await history.push('/');
    } catch (err) {
      switch (err.code) {
        case 'auth/email-already-in-use':
          setIsError(true);
          setErrorText('Пользователь с таким email уже существует');
          console.log(err);
          break;
        case 'auth/invalid-email':
          setIsError(true);
          setErrorText('Введен некорректный email');
          console.log(err);
          break;
        case 'auth/weak-password':
          setIsError(true);
          setErrorText('Введен некорректный пароль');
          console.log(err);
          break;
        default:
          console.log(err);
          break;
      }
    }
  };

  if (isError) {
    return <FormError errorText={errorText} setIsError={setIsError} />;
  }

  return (
    <div className='form-container'>
      <h1>Регистрация</h1>
      <Form text={'Зарегистрироваться'} formAction={registration} />
      <Link to='/auth' className='form-link'>
        Авторизация
      </Link>
    </div>
  );
}

export default RegistrationForm;
