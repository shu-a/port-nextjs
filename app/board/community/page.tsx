import BoardHeader from "@/app/ui/board/board-header";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col p-3 w-full h-full itmes">
      <div>
        <BoardHeader />
      </div>
      <div className="flex items-center justify-center h-[400px]">
        <ul className="flex flex-col w-full h-full">
          <li className="">111</li>
          <li className="">222</li>
          <li className="">333</li>
          <li className="">444</li>
          <li className="">555</li>
        </ul>
      </div>
    </div>
  );
};

export default Page;
