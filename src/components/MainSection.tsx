import { useState } from "react";
import Leftside from "./Leftside";
import Rightside from "./Rightside";

const MainSection = () => {
  const [input, setInputValue] = useState<string>("");
  const [selectedMovie , setSelectMovie] = useState< string | null>(null)
  const handleMovieSelect = (id:string)=>{
    setSelectMovie(id)
  }
  console.log(input);
  return (
    <div>
      <div className=" w-[90%] sm:w-[70%] mx-auto">
        <div className="text-center mt-5">
          <input
            value={input}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            className=" w-[100%] sm:w-[50%] mx-auto p-4 text-center bg-white/10 backdrop-blur-md 
             shadow-xl ring-1 ring-white/20  text-slate-100 m-2   rounded-2xl outline-none"
            type="text"
            placeholder="search movies"
          />
        </div>
        <div
          className="bg-white/10 backdrop-blur-md sm:p-2 sm:gap-2
  shadow-xl ring-1 ring-white/20 
  flex flex-col sm:flex-row h-[500px] sm:w-[80%] mx-auto mt-3 rounded"
        >
          <div className="h-1/2 sm:h-full w-full sm:w-1/2 border rounded  border-slate-400">
            <Leftside input={input} onMovieSelect={handleMovieSelect}   />
          </div>
          <div className="h-1/2 sm:h-full w-full sm:w-1/2 border rounded  border-slate-400">
            <Rightside imdbId={selectedMovie} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
