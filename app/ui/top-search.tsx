"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";

const TopSearch = () => {
  return (
    <>
      <div className="relative flex flex-1 flex-shrink-0">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          className="block p-2 pl-10 h-[30px] rounded-full text-md border border-gray-400 placeholder:text-gray-500"
        />
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
      </div>
    </>
  );
};

export default TopSearch;