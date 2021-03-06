import React, { useState, useEffect } from 'react';
import { FaEyeSlash, FaEye, FaCheck } from 'react-icons/fa';

function Form({ text, formAction }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [emailError, setEmailError] = useState('Некорректный email');
  const [passwordError, setPasswordError] = useState(
    'Длина пароля должна быть не менее 6 символов'
  );
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (passwordError || emailError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [passwordError, emailError]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Некорректный email');
    } else {
      setEmailError('');
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 6) {
      setPasswordError('Длина пароля должна быть не менее 6 символов');
    } else {
      setPasswordError('');
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true);
        e.target.value < 1 && setEmailFocus(false);
        break;
      case 'password':
        setPasswordDirty(true);
        e.target.value < 1 && setPasswordFocus(false);
        break;
      default:
        break;
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form className='form' onSubmit={(e) => handleSubmit(e)}>
      <div className='input-wrapper'>
        <label
          htmlFor='email'
          className={`${
            emailFocus || email ? 'input-label input-active' : 'input-label'
          }`}
        >
          Введите email
        </label>
        <input
          className='form-input'
          id='email'
          name='email'
          type='text'
          value={email}
          onChange={(e) => emailHandler(e)}
          onBlur={(e) => blurHandler(e)}
          onFocus={() => setEmailFocus(true)}
        />
      </div>
      <div className='input-error-message'>
        {emailError && emailDirty ? <p>{emailError}</p> : null}
      </div>
      <div className='input-wrapper'>
        <label
          htmlFor='password'
          className={`${
            passwordFocus || password
              ? 'input-label input-active'
              : 'input-label'
          }`}
        >
          Введите пароль
        </label>
        <span className='password-icon' onClick={toggleShowPassword}>
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </span>
        <input
          className='form-input'
          type={showPassword ? 'text' : 'password'}
          id='password'
          name='password'
          value={password}
          onChange={(e) => passwordHandler(e)}
          onBlur={(e) => blurHandler(e)}
          onFocus={() => setPasswordFocus(true)}
        />
      </div>
      <div className='input-error-message'>
        {passwordError && passwordDirty ? <p>{passwordError}</p> : null}
      </div>

      <label htmlFor='rememberUser' className='checkbox-label'>
        <input
          type='checkbox'
          id='rememberUser'
          name='rememberUser'
          checked={remember}
          onChange={() => setRemember(!remember)}
          className='form-checkbox'
        />
        <div className='custom-form-checkbox'>
          {remember && <FaCheck className='form-check-mark' />}
        </div>
        <span>Запомнить меня</span>
      </label>

      <button
        className={`${
          formValid ? 'form-button' : 'form-button form-button-dasabled'
        }`}
        onClick={() => formAction(email, password, remember)}
        disabled={!formValid}
      >
        {text}
      </button>
    </form>
  );
}

export default Form;
