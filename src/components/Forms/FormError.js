import React from 'react';

function FormError({ errorText, setIsError }) {
  return (
    <div className='form-container'>
      <h1>Ошибка</h1>
      <p>{errorText}</p>
      <button onClick={() => setIsError(false)}>OK</button>
    </div>
  );
}

export default FormError;
