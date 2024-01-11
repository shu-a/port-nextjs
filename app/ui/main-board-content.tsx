import React from "react";

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
      <a href="#" className="flex flex-col p-3 border-b-2 border-gray-300">
        <section className="flex flex-row items-center justify-between">
          <section className="flex flex-row">
            <div className="mr-3">유저: {content.user}</div>
            <div className="mr-3">날짜: {content.date}</div>
            <div className="">조회수: {content.view}</div>
          </section>
          <section className="flex flex-row items-center">
            <div className="mr-3">추천: {content.vote}</div>
            <div>댓글: {content.commentCount}</div>
          </section>
        </section>
        <section className="flex flex-row items-center">
          <section>
            <div>{content.title}</div>
          </section>
        </section>
      </a>
    </div>
  );
};

export default MainBoardContent;
