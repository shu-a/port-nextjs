'use client';

import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import TopUserMenu from './top-usermenu';
import ThemeChanger from './darkmode';

const menus = ['menu 1', 'menu 2', 'menu 3', 'menu 4', 'menu 5'];
const loginMenus = [
  {
    title: 'Scrap',
    url: '',
  },
  {
    title: 'Notification',
    url: '',
  },
  {
    title: 'Avatar',
    url: '',
  },
  {
    title: '프로필',
    url: '',
  },
  {
    title: '계정 관리',
    url: '',
  },
  {
    title: '활동 내역',
    url: '',
  },
  {
    title: '이력서 관리',
    url: '',
  },
  {
    title: '관심 포지션',
    url: '',
  },
];

const TopMobileMenuList = ({
  menuClose,
  showMenu,
}: {
  menuClose: (e: React.MouseEvent) => void;
  showMenu: boolean;
}) => {
  return (
    <div
      className={`absolute top-0 left-0 w-full h-screen p-3 transition-[visibility,opacity] z-20 bg-[rgba(0,0,0,0.3)] ${
        showMenu ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
      onClick={menuClose}
      id="top"
    >
      <div
        className={`pt-5 bg-white dark:bg-gray-700 shadow-[0_0_10px_5px_rgba(0,0,0,0.2)] rounded-xl backdrop-blur-xl z-30 min-w-[300px] w-full transition-[visibility,opacity,transform] transform ${
          showMenu
            ? 'visible opacity-100 scale-100'
            : 'invisible opacity-0 scale-90'
        }`}
      >
        {/* Top */}
        <div className="flex items-center justify-between pb-5">
          {/* 로고 */}
          <Image
            alt="logo"
            src={'/next.svg'}
            width={70}
            height={20.3}
            className="dark:invert ml-8"
          />

          {/* 닫기 버튼 */}
          <div
            className="flex items-center justify-center rounded-lg w-[32px] h-[32px] bg-gray-200 mr-6 dark:bg-gray-400 cursor-pointer hover:bg-gray-300 transition-colors"
            onClick={menuClose}
            id="close"
          >
            <XMarkIcon
              className="w-[18px] h-[18px] dark:text-black"
              id="closeIcon"
            />
          </div>
        </div>

        {/* 메뉴 */}
        <div className="flex flex-col pl-8 pr-8 mb-5">
          {menus &&
            menus.map((menu) => (
              <button key={menu} className="flex items-center pt-1 pb-1 transition-colors hover:text-gray-500">
                {menu}
              </button>
            ))}
        </div>

        <div className="border-t flex flex-col pl-8 pr-8 pt-5 pb-5">
          {loginMenus &&
            loginMenus.map((menu) => (
              <button key={menu.title} className="flex items-center pt-1 pb-1 transition-colors hover:text-gray-500">
                {menu.title}
              </button>
            ))}
        </div>

        <div className="border-t flex items-center justify-between pl-8 pr-8 pt-5 pb-5">
          {/* 로그인 */}
          <TopUserMenu />

          {/* 다크모드 */}
          <ThemeChanger />
        </div>
      </div>
    </div>
  );
};

export default TopMobileMenuList;
