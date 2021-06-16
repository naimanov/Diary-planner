import React from 'react';
import { Link } from 'react-router-dom';

function Error404({ errorText }) {
  return (
    <div className='error-page'>
      <h2>{errorText}</h2>
      <Link className='error-link' to='/'>
        На главную страницу
      </Link>
    </div>
  );
}

export default Error404;
