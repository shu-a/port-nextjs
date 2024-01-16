"use client";

import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import TopUserMenu from "./top-usermenu";
import ThemeChanger from "./darkmode";

const TopMobileMenuList = ({ menuClose }: { menuClose: () => void }) => {
  return (
    <div className="absolute top-5 left-5 w-[calc(100%-40px)] h-[500px] bg-white dark:bg-gray-700 z-10 shadow-[0_0_10px_5px_rgba(0,0,0,0.2)] rounded-xl bg-[rgba(255,255,255,0.3)] backdrop-blur-xl">
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
          className="flex items-center justify-center rounded-lg w-[32px] h-[32px] bg-gray-200 mr-6 dark:bg-gray-400"
          onClick={menuClose}
        >
          <XMarkIcon className="w-[18px] h-[18px] dark:text-black" />
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
  );
};

export default TopMobileMenuList;
