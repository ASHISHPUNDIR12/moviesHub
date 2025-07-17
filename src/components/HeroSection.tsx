import { useNavigate } from "react-router-dom";
import TypewriterComponent from "typewriter-effect";

const HeroSection = () => {
    const navigate = useNavigate()
  return (
    <div className="">
      <div
        className="text-center w-[90%] sm:w-[70%]  mx-auto mt-10 p-4 sm:p-20 rounded-2xl  bg-white/10 backdrop-blur-md 
  shadow-xl ring-1 ring-white/20  "
      >
        <h1 className=" text-4xl sm:text-7xl animate-pulse  font-extrabold bg-gradient-to-r from-blue-100 to-gray-100 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)] ">
          Browse Your fav
          <span>
            <TypewriterComponent
              options={{
                strings: ["Movie", "Show", "Series"],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 50,
              }}
            />
          </span>
        </h1>
      </div>

      <div className="text-center mt-20">
        <button onClick={()=>{
            navigate("/search")
        }} className="px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-lg font-semibold rounded-full shadow-md hover:scale-105 transition-transform duration-300">
          Start Browsing
        </button>
      </div>

        <div className=" mt-5 sm:mt-10 text-center animate-bounce text-white text-4xl">↓</div>

    </div>
  );
};

export default HeroSection;
