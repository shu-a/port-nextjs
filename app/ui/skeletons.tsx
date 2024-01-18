// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';
const pulseMd = 'animate-pulse bg-gray-300 rounded-md';
const pulse2Xl = 'animate-pulse bg-gray-300 rounded-2xl';

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
    <div
      className={`flex flex-row items-center justify-center w-full min-h-[500px]`}
    >
      <div className={`flex flex-col p-3 w-full h-full itmes`}>
        <div>
          <BoardHeaderSkeleton />
        </div>
        <div className={`flex items-center justify-center h-[400px]`}>
          <div className="flex flex-col w-full h-full">
            <div>
              <div className="flex flex-col p-3">
                <section className="flex flex-row items-center justify-between">
                  <section className="flex flex-row">
                    <div className="mr-3 relative flex items-center justify-center">
                      <div className={`${pulseMd} w-[180px] h-[18px]`} />
                    </div>
                    <div className="mr-3 relative flex items-center justify-center"></div>
                    <div className="relative flex items-center justify-center"></div>
                  </section>
                  <section className="flex flex-row items-center">
                    <div className="mr-3 relative flex items-center justify-center"></div>
                    <div className="relative flex items-center justify-center">
                      <div className={`${pulseMd} w-[100px] h-[18px]`} />
                    </div>
                  </section>
                </section>
                <section className="flex items-center mt-2 w-full">
                  <section className="flex flex-row items-center w-full">
                    <div className={`${pulseMd} w-full h-[18px]`} />
                  </section>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BoardHeaderSkeleton = () => {
  return (
    <div
      className={`${pulse2Xl} relative overflow-hidden w-full h-[60px]`}
    ></div>
  );
};
