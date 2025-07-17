import { useState } from "react";
import MobileNavMenu from "./MobileNavMenu";

const Navbar = () => {
  const [burgerClicked, setBurgerClicked] = useState<Boolean>(false);
  return (
    <div className="w-screen pt-5">
      <nav
        className=" w-[90%] sm:w-[70%] mx-auto mt-4 px-6 py-3 
  rounded-2xl flex justify-between items-center 
  bg-white/10 backdrop-blur-md 
  shadow-xl ring-1 ring-white/20"
      >
        <div className="text-white font-thin text-2xl ">MovieHub</div>
        <ul className=" hidden  sm:flex sm:gap-10 text-gray-100 ">
          <a href="#">Home</a>
          <a href="#">About us </a>
          <a href="#">Github</a>
        </ul>

        <button
          onClick={() => setBurgerClicked(!burgerClicked)}
          className="relative sm:hidden"
        >
          <div
            className="relative flex items-center justify-center rounded-full w-[40px] h-[40px] 
    bg-white/10 backdrop-blur-md ring-1 ring-white/20 
    transition-all duration-200 shadow-md"
          >
            <div className="flex flex-col justify-between w-[20px] h-[20px] transition-all duration-300 origin-center">
              <div
                className={`bg-white h-[2px] w-5 origin-left transition-all duration-300
          ${burgerClicked ? "rotate-[42deg]" : ""}`}
              ></div>
              <div
                className={`bg-white h-[2px] w-1/2 transition-all duration-300
          ${burgerClicked ? "-translate-x-10 opacity-0" : ""}`}
              ></div>
              <div
                className={`bg-white h-[2px] w-5 origin-left transition-all duration-300
          ${burgerClicked ? "-rotate-[42deg]" : ""}`}
              ></div>
            </div>
          </div>
        </button>
      </nav>
      {burgerClicked && <MobileNavMenu />}
    </div>
  );
};

export default Navbar;
