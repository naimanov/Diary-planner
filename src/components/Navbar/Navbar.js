import React from 'react';
import Logo from './Logo';
import TodayButton from './TodayButton';

function Navbar() {
  return (
    <header className='navbar'>
      <Logo />
      <TodayButton />
    </header>
  );
}

export default Navbar;
