import React, { useState } from 'react';
import { auth } from '../../Firebase/firebase';
import firebase from 'firebase/app';
import { useHistory, Link } from 'react-router-dom';
import Form from './Form';
import FormError from './FormError';

function SignInForm() {
  const history = useHistory();
  const [isError, setIsError] = useState(false);
  const [errorText, setErrorText] = useState('');

  const signIn = async (email, password, remember) => {
    try {
      if (!remember) {
        auth.setPersistence(firebase.auth.Auth.Persistence.SESSION);
      }
      await auth.signInWithEmailAndPassword(email, password);
      await history.push('/');
    } catch (err) {
      switch (err.code) {
        case 'auth/user-not-found':
          setIsError(true);
          setErrorText('Пользователь с таким email не существует');
          console.log(err);
          break;
        case 'auth/wrong-password':
          setIsError(true);
          setErrorText('Введен неверный пароль');
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
      <h2 className='form-title'>Авторизация</h2>
      <Form text={'войти'} formAction={signIn} />
      <Link to='/registration' className='form-link'>
        Зарегистрироваться
      </Link>
    </div>
  );
}

export default SignInForm;
