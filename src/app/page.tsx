import Home from "./home/page";
import Projects from "./projects/page";
import About from "./about/page";
import Uses from "./uses/page";

export default function Index() {
  return (
    <div className="sm:px-8 pb-20 gap-16">
      <div className="mx-auto w-full max-w-7xl lg:px-8  bg-[#18181B] dark:bg-[#18181B] text-black dark:text-white">
        <main className="">
          <Home />
          <About />
          <Projects />
          <Uses />
        </main>
      </div>
    </div>
  );
}
