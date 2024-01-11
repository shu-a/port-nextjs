// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export const MainBoardSkeleton = () => {
  return (
    <>
      <BoardSkeleton />
      <BoardSkeleton />
      <BoardSkeleton />
      <BoardSkeleton />
    </>
  );
};

export const BoardSkeleton = () => {
  return (
    <div className={`flex flex-row items-center justify-center w-full min-h-[700px]`}>
      <div className={`flex flex-col p-3 w-full h-full itmes`}>
        <div>
          <BoardHeaderSkeleton />
        </div>
        <div className={`flex items-center justify-center h-[400px]`}>
          <ul className="flex flex-col w-full h-full"></ul>
        </div>
      </div>
    </div>
  );
};

export const BoardHeaderSkeleton = () => { // flex items-center w-full h-[80px] pl-5 pr-5 text-xl rounded-2xl
  return (
    <div className={`${shimmer} relative overflow-hidden w-full h-[80px] rounded-2xl bg-gray-200`}></div>
  );
};
