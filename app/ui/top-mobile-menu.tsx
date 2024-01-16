"use client";

import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import TopMobileMenuList from "./top-mobile-menu-list";

const TopMobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuClose = () => {
    setShowMenu(false);
  };

  return (
    <>
      <button
        onClick={(e) => {
          setShowMenu(!showMenu);
        }}
      >
        <Bars3Icon className="h-[32px] w-[32px]" />
      </button>
      {showMenu && <TopMobileMenuList menuClose={menuClose} />}
      {/* <button>Scrap</button>
        <button>Notification</button>
        <button>Avatar</button> */}
      {/* 프로필
        계정 관리
        활동 내역
        이력서 관리
        관심 포지션
        포지션 지원이력
        로그아웃 */}
    </>
  );
};

export default TopMobileMenu;
