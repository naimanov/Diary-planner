import React from 'react';
import Logo from './Logo/Logo';
import TodayButton from './NavButtons/TodayButton';
import LogOutButton from './NavButtons/LogOutButton';

function Navbar() {
  return (
    <header className='navbar'>
      <Logo />
      <div className='nav-buttons'>
        <TodayButton />
        <LogOutButton />
      </div>
    </header>
  );
}

export default Navbar;
