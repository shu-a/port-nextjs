import React from 'react';
import {
  CalendarDaysIcon,
  EyeIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HandThumbUpIcon,
} from '@heroicons/react/24/outline';

const MainBoardContent = ({
  content,
}: {
  content: {
    seq: number;
    user: string;
    view: number;
    date: string;
    title: string;
    vote: number;
    commentCount: 0;
  };
}) => {
  return (
    <div key={content.seq}>
      <a href="#" className="flex flex-col p-3 border-b border-gray-300">
        <section className="flex flex-row items-center justify-between">
          <section className="flex flex-row">
            <div className="mr-3 relative flex items-center justify-center">
              {content.user}
            </div>
            <div className="mr-3 relative flex items-center justify-center">
              <CalendarDaysIcon className="w-[18px] h-[18px] mr-1" />
              {content.date}
            </div>
            <div className="relative flex items-center justify-center">
              <EyeIcon className="w-[18px] h-[18px] mr-1" />
              {content.view}
            </div>
          </section>
          <section className="flex flex-row items-center">
            <div className="mr-3 relative flex items-center justify-center">
              <HandThumbUpIcon className="w-[18px] h-[18px] mr-1" />
              {content.vote}
            </div>
            <div className="relative flex items-center justify-center">
              <ChatBubbleOvalLeftEllipsisIcon className="w-[18px] h-[18px] mr-1" />
              {content.commentCount}
            </div>
          </section>
        </section>
        <section className="flex flex-row items-center">
          <section className="flex flex-row items-center min-w-0">
            <div className="whitespace-nowrap text-ellipsis overflow-hidden">
              {content.title}
            </div>
          </section>
        </section>
      </a>
    </div>
  );
};

export default MainBoardContent;
