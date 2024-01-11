import React from "react";

const BoardHeader = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center w-full h-[80px] pl-5 pr-5 bg-black text-white border text-xl rounded-2xl">{title}</div>
  );
};

export default BoardHeader;
