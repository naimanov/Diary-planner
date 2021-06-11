import React from 'react';
import { Link } from 'react-router-dom';

function Error404({ errorText }) {
  return (
    <div>
      <h2>{errorText}</h2>
      <Link to='/'>На главную страницу</Link>
    </div>
  );
}

export default Error404;
