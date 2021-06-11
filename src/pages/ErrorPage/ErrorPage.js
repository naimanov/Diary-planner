import React from 'react';
import Error from '../../components/Error/Error';

function errorPage() {
  return <Error errorText={'Что-то пошло не так...'} />;
}

export default errorPage;
