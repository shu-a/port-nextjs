"use client";

import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import TopUserMenu from "./top-usermenu";
import ThemeChanger from "./darkmode";

const TopMobileMenuList = ({
  menuClose,
  showMenu,
}: {
  menuClose: (e: React.MouseEvent) => void;
  showMenu: boolean;
}) => {
  return (
    <div
      className={`absolute top-0 left-0 w-full h-screen p-3 flex justify-center transition-[visibility,opacity] z-20 bg-[rgba(0,0,0,0.3)] ${
        showMenu ? "visible opacity-100" : "invisible opacity-0"
      }`}
      onClick={menuClose}
      id="top"
    >
      <div
        className={`bg-white dark:bg-gray-700 shadow-[0_0_10px_5px_rgba(0,0,0,0.2)] rounded-xl backdrop-blur-xl z-30 min-w-[300px] w-full h-[500px] transition-[visibility,opacity,transform] transform ${
          showMenu
            ? "visible opacity-100 scale-100"
            : "invisible opacity-0 scale-90"
        }`}
      >
        {/* Top */}
        <div className="flex items-center justify-between">
          {/* 로고 */}
          <Image
            alt="logo"
            src={"/ths.png"}
            width={100}
            height={20.3}
            className="dark:invert ml-2"
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
        <div className="flex flex-col pl-8 pr-8 mb-1">
          <div className="flex items-center pt-1 pb-1">Menu 1</div>
          <div className="flex items-center pt-1 pb-1">Menu 2</div>
          <div className="flex items-center pt-1 pb-1">Menu 3</div>
          <div className="flex items-center pt-1 pb-1">Menu 4</div>
        </div>

        <div className="border-t flex items-center justify-between pl-8 pr-8 pt-2">
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
