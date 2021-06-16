import React from 'react';
import Logo from './Logo/Logo';
import TodayButton from './NavButtons/TodayButton';
import LogOutButton from './NavButtons/LogOutButton';
import CalendarButton from './NavButtons/CalendarButton';

function Navbar() {
  return (
    <header className='navbar'>
      <Logo />
      <div className='nav-buttons'>
        <CalendarButton />
        <TodayButton />
        <LogOutButton />
      </div>
    </header>
  );
}

export default Navbar;
