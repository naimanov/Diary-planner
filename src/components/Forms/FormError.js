import React from 'react';

function FormError({ errorText, setIsError }) {
  return (
    <div className='form-container error'>
      <h2>Ошибка</h2>
      <p>{errorText}</p>
      <button className='error-button' onClick={() => setIsError(false)}>
        OK
      </button>
    </div>
  );
}

export default FormError;
