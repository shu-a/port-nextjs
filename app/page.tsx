import Image from "next/image";

export default function Home() {
  return (
    <main className="border flex min-h-screen flex-col items-center justify-between">
      <header className="border flex flex-row items-center justify-between pl-24 pr-24 top-0 w-full h-[50px] sticky backdrop-blur-xl">
        <div className="broder">logo</div>
        <div className="border hidden md:inline-block">
          menu1 | menu2 | menu3
        </div>
        <div className="border hidden lg:inline-block">search | darkmode</div>
        <div className="broder">etc</div>
      </header>
      <section className="border flex flex-row items-center justify-center mt-3 w-full h-full md:justify-between">
        <div className="h-full border w-1/4 hidden md:flex items-center justify-center">
          Left
        </div>
        <div className="border grid grid-cols-1 md:grid-cols-2 w-full h-full">
          <div className="border flex flex-row items-center justify-center w-full min-h-[500px]">
            Contents1
          </div>
          <div className="border flex flex-row items-center justify-center w-full min-h-[500px]">
            Contents2
          </div>
          <div className="border flex flex-row items-center justify-center w-full min-h-[500px]">
            Contents3
          </div>
          <div className="border flex flex-row items-center justify-center w-full min-h-[500px]">
            Contents4
          </div>
        </div>
        <div className="border w-1/4 h-full hidden lg:flex items-center justify-center">
          Right
        </div>
      </section>
      <div
        className={`border flex flex-row items-center justify-center pl-24 pr-24 bottom-0 w-full h-[150px]`}
      >
        Footer
      </div>
    </main>
  );
}
