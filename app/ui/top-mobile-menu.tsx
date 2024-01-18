'use client';

import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import TopMobileMenuList from './top-mobile-menu-list';

const TopMobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuClose = (e: React.MouseEvent) => {
    switch ((e.target as Element).id) {
      case 'top':
      case 'close':
      case 'closeIcon':
        setShowMenu(false);
        break;
    }
  };

  return (
    <>
      <label htmlFor="hamburger" className="sr-only">
        mobile menu
      </label>
      <button
        onClick={(e) => {
          setShowMenu(!showMenu);
        }}
      >
        <Bars3Icon className="h-[32px] w-[32px]" />
      </button>
      <TopMobileMenuList menuClose={menuClose} showMenu={showMenu} />
    </>
  );
};

export default TopMobileMenu;
