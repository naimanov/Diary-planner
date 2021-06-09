import React from 'react';
import Calendar from '../../components/Calendar/Calendar';
import Tasks from '../../components/Tasks/Tasks';

function MainPage() {
  return (
    <main className='main-layout'>
      <Calendar />
      <Tasks />
    </main>
  );
}

export default MainPage;
