import { useRef, useState } from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
const Layout = () => {
  const [buttonClicked, setButtonClicked] = useState<Boolean>(false);
  const movieRef = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <div className="w-full min-h-screen overflow-x-hidden bg-gradient-to-r from-indigo-900 to-indigo-600">
        <Navbar />
        <HeroSection />
        <div className="text-center   text-white">
          <button
            onClick={() => {
              setButtonClicked(!buttonClicked);
              setTimeout(() => {
                movieRef.current?.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }}
            className=" px-3 py-3 font-semibold  rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500"
          >
            Show popular movies
          </button>

          {buttonClicked && (
            <div
              className=" mt-10  w-[90%] sm:w-[70%] rounded-2xl flex flex-wrap justify-center gap-5 p-10  mx-auto bg-white/5 backdrop-blur-md 
  shadow-xl ring-1 ring-white/20 "
              ref={movieRef}
            >
              <MovieCard
                title="breaking bed"
                year="2008-2013"
                imageId="https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_SX300.jpg"
              />
              <MovieCard
                title="Sex Education"
                year="2019–2023"
                imageId="https://m.media-amazon.com/images/M/MV5BOTE0MjQ1NDU3OV5BMl5BanBnXkFtZTgwNTI4MTgwNzM@._V1_SX300.jpg"
              />
              <MovieCard
                title="The Batman"
                year="2022"
                imageId="https://m.media-amazon.com/images/M/MV5BMmU5NGJlMzAtMGNmOC00YjJjLTgyMzUtNjAyYmE4Njg5YWMyXkEyXkFqcGc@._V1_SX300.jpg"
              />
              <MovieCard
                title="Sex Education"
                year="2019–2023"
                imageId="https://m.media-amazon.com/images/M/MV5BOTE0MjQ1NDU3OV5BMl5BanBnXkFtZTgwNTI4MTgwNzM@._V1_SX300.jpg"
              />
              <MovieCard
                title="The Batman"
                year="2022"
                imageId="https://m.media-amazon.com/images/M/MV5BMmU5NGJlMzAtMGNmOC00YjJjLTgyMzUtNjAyYmE4Njg5YWMyXkEyXkFqcGc@._V1_SX300.jpg"
              />
              <MovieCard
                title="Fifty Shades of Grey"
                year="2015"
                imageId="https://m.media-amazon.com/images/M/MV5BMjE1MTM4NDAzOF5BMl5BanBnXkFtZTgwNTMwNjI0MzE@._V1_SX300.jpg"
              />
              <MovieCard
                title="Fifty Shades of Grey"
                year="2015"
                imageId="https://m.media-amazon.com/images/M/MV5BMjE1MTM4NDAzOF5BMl5BanBnXkFtZTgwNTMwNjI0MzE@._V1_SX300.jpg"
              />
              <MovieCard
                title="Fifty Shades of Grey"
                year="2015"
                imageId="https://m.media-amazon.com/images/M/MV5BMjE1MTM4NDAzOF5BMl5BanBnXkFtZTgwNTMwNjI0MzE@._V1_SX300.jpg"
              />
                <MovieCard
                    title="Fifty Shades of Grey"
                    year="2015"
                    imageId="https://m.media-amazon.com/images/M/MV5BMjE1MTM4NDAzOF5BMl5BanBnXkFtZTgwNTMwNjI0MzE@._V1_SX300.jpg"
                />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Layout;
