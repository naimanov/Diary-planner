import React from 'react';
import Logo from './Logo';
import TodayButton from './TodayButton';
import LoginButton from './LoginButton';

function Navbar() {
  return (
    <header className='navbar'>
      <Logo />
      <div className='nav-buttons'>
        <TodayButton />
        <LoginButton />
      </div>
    </header>
  );
}

export default Navbar;
