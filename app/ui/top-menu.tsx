"use client";

import React from "react";

const menuList = ["커뮤니티", "지식", "QnA", "공지사항"];
const TopMenu = () => {
  return (
    <>
      <div className="flex flex-row justify-around">
        {menuList.map((menu) => (
          <div key={menu} className="">{menu}</div>
        ))}
      </div>
    </>
  );
};

export default TopMenu;
