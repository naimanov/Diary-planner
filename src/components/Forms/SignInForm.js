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
      if (err.code === 'auth/user-not-found') {
        setIsError(true);
        setErrorText('Пользователь с таким email не существует');
        console.log(err);
      } else {
        console.log(err);
      }
    }
  };

  if (isError) {
    return <FormError errorText={errorText} setIsError={setIsError} />;
  }

  return (
    <div className='form-container'>
      <h1>Авторизация</h1>
      <Form text={'войти'} formAction={signIn} />
      <Link to='/registration' className='form-link'>
        Зарегистрироваться
      </Link>
    </div>
  );
}

export default SignInForm;
