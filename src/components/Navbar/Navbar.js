import React from 'react';
import Logo from './Logo';
import TodayButton from './TodayButton';
import LogOutButton from './LogOutButton';

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
