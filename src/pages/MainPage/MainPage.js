import React, { useEffect } from 'react';
import Calendar from '../../components/Calendar/Calendar';
import Tasks from '../../components/Tasks/Tasks';
import { auth } from '../../Firebase/firebase';
import { GET_USER_ID } from '../../constants/constants';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function MainPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const unsibscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({ type: GET_USER_ID, payload: user.uid });
      } else {
        history.push('/auth');
      }
    });
    return unsibscribe;
  }, []);

  return (
    <main className='main-layout'>
      <Calendar />
      <Tasks />
    </main>
  );
}

export default MainPage;
