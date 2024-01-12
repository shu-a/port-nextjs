import { Suspense } from "react";
import Image from "next/image";
import TopMenu from "@/app/ui/top-menu";
import Footer from "@/app/ui/footer";
import TopSearch from "@/app/ui/top-search";
import DarkMode from "@/app/ui/darkmode";
import TopUserMenu from "@/app/ui/top-usermenu";
import { MainBoardSkeleton } from "@/app/ui/skeletons";
import MainBoard from "./ui/main-board";

export const dynamic = "force-dynamic";

const Page = async () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {" "}
      {/* bg-[url(/bg2.png)] bg-no-repeat bg-[center_120px] lg:bg-[65%_center] lg:bg-[length:35%]  */}
      {/* <Image alt="" src={"/bg2.png"} fill={true} /> */}
      <header className="flex flex-row items-center justify-between pl-20 pr-20 top-0 w-full h-[70px] sticky bg-[rgba(255,255,255,0.3)] backdrop-blur-xl border-b-[1px]  border-b-gray-200">
        <div className="">
          <label htmlFor="logo" className="sr-only">
            logo
          </label>
          <a href="/" rel="logo">
            <Image alt="logo" src={"/next.svg"} width={100} height={20.3} />
          </a>
        </div>
        <div className="hidden md:inline-block">
          <TopMenu />
        </div>
        <div className="hidden lg:inline-block">
          <TopSearch />
        </div>
        <div className="hidden md:inline-block">
          <DarkMode />
        </div>
        <div className="">
          <TopUserMenu />
        </div>
      </header>
      <section className="flex flex-row items-center justify-center mt-2 w-full h-full md:justify-between">
        <div className="h-full w-1/4 hidden lg:flex items-center justify-center">
          Left
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full">
          <Suspense fallback={<MainBoardSkeleton />}>
            <MainBoard />
          </Suspense>
        </div>
        <div className="w-1/4 h-full hidden lg:flex items-center justify-center">
          Right
        </div>
      </section>
      <div
        className={`flex flex-row items-center justify-center pl-20 pr-20 bottom-0 w-full h-[150px]`}
      >
        <Footer />
      </div>
    </main>
  );
};

export default Page;
