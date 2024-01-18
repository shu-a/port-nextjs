import React from 'react';

const BoardHeader = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center w-full h-[60px] pl-3 text-black dark:text-white text-2xl font-bold">
      {title}
    </div>
    // <div className="flex items-center w-full h-[70px] pl-5 pr-5 bg-black text-white border dark:border-black text-xl rounded-2xl">{title}</div>
  );
};

export default BoardHeader;
