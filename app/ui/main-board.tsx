import { Suspense } from "react";
import { getTopMenu } from "../apis";
import { BoardHeaderSkeleton } from "./skeletons";
import BoardHeader from "./board/board-header";
import MainBoardContent from "./main-board-content";

interface Content {
  title: string;
  content: [
    {
      seq: number;
      user: string;
      view: number;
      date: string;
      title: string;
      vote: number;
      commentCount: 0;
    }
  ];
}

interface Board {
  result: [Content];
}
const MainBoard = async () => {
  const boardlist = await getTopMenu();

  return (
    <>
      {boardlist?.result?.content.map((board: Content) => (
        <div
          key={board.title}
          className="flex flex-row items-center justify-center w-full min-h-[700px]"
        >
          <div
            key={board.title}
            className="flex flex-col p-3 w-full h-full itmes"
          >
            <div>
              <Suspense fallback={<BoardHeaderSkeleton />}>
                <BoardHeader title={board.title} />
              </Suspense>
            </div>
            <div className="flex items-center justify-center h-[400px] mt-3">
              <div className="flex flex-col w-full h-full">
                {board?.content.length > 0 &&
                  board.content.map((content) => (
                    <MainBoardContent key={content.seq} content={content} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MainBoard;
