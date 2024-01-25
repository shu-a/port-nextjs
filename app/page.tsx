import { Suspense } from 'react';
import Image from 'next/image';
import TopMenu from '@/app/ui/top-menu';
import Footer from '@/app/ui/footer';
import TopSearch from '@/app/ui/top-search';
import DarkMode from '@/app/ui/darkmode';
import TopUserMenu from '@/app/ui/top-usermenu';
import { MainBoardSkeleton } from '@/app/ui/skeletons';
import MainBoard from './ui/main-board';
import TopMobileMenu from './ui/top-mobile-menu';

export const dynamic = 'force-dynamic';

const Page = async () => {
  return (
    <main className="flex min-h-screen min-w-[350px] flex-col items-center justify-between dark:bg-gray-800 transition-colors duration-75">
      {/* bg-[url(/bg2.png)] bg-no-repeat bg-[center_120px] lg:bg-[65%_center] lg:bg-[length:35%]  */}
      {/* <Image alt="" src={"/bg2.png"} fill={true} /> */}
      {/* header */}
      <header className="flex flex-row items-center justify-center top-0 w-full h-[70px] sticky bg-[rgba(255,255,255,0.3)] dark:bg-[rgba(0,0,0,0.3)] backdrop-blur-xl border-b-[1px] border-b-gray-200 dark:border-b-gray-500 z-50">
        <nav className="flex flex-row items-center justify-between pl-10 pr-10 w-[1024px]">
          <div className="relative min-w-[80px] flex items-center justify-center dark:invert left-0">
            <label htmlFor="logo" className="sr-only">
              logo
            </label>
            <a href="/" rel="logo">
              <Image alt="logo" src={'/next.svg'} width={80} height={20.3} />
            </a>
          </div>
          <div className="hidden md:whitespace-nowrap md:flex md:flex-row md:justify-around md:w-[350px] md:min-w-[350px]">
            <TopMenu />
          </div>
          <div className="hidden md:flex md:flex-row md:items-center md:justify-between md:max-w-[350px]">
            <div className="hidden md:block md:mr-9">
              <TopSearch />
            </div>
            <div className="hidden md:flex md:items-center md:justify-center md:min-w-[24px]">
              <DarkMode />
            </div>
          </div>
          <div className="hidden md:whitespace-nowrap md:block md:right-0">
            <TopUserMenu />
          </div>
          <div className="flex items-center justify-center md:hidden">
            <TopMobileMenu />
          </div>
        </nav>
      </header>
      {/* center */}
      <div className="flex flex-row items-center justify-center mt-2 w-full h-full">
        {/* left */}
        <div className="w-[180px] h-full hidden xl:flex xl:items-center xl:justify-center"></div>
        {/* content */}
        <div className="grid grid-cols-1 w-full h-full md:grid-cols-2 md:w-[1024px]">
          <Suspense fallback={<MainBoardSkeleton />}>
            <MainBoard />
          </Suspense>
        </div>
        {/* right */}
        <div className="w-[180px] h-full hidden xl:flex xl:items-center xl:justify-center"></div>
      </div>
      {/* footer */}
      <div
        className={`flex flex-row items-center justify-center pl-20 pr-20 bottom-0 w-full h-[150px]`}
      >
        <Footer />
      </div>
    </main>
  );
};

export default Page;
