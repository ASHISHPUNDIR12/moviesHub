import axios from "axios";
import { useEffect, useState } from "react";
import StarRating from "./StarRating";

interface RightSideProps {
  imdbId: string | null;
}
interface Movie {
  Title: string;
  Year: string;
  Actors: string;
  imdbRating: string;
  Poster: string;
  Plot: string;
}
const Rightside = ({ imdbId }: RightSideProps) => {
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;

  const [movie, setMovie] = useState<Movie | null>(null);
  const [showWatchedMovies, setShowWatchedMovies] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        if (!imdbId) return;
        const response = await axios(
          `https://www.omdbapi.com/?i=${imdbId}&apikey=${apiKey}`
        );
        setMovie(response.data);
      } catch (e) {
        console.error(e);
      }
    };
    getData();
  }, [imdbId]);

if (!movie || showWatchedMovies)
  return (
    <div>
      <div className="flex justify-between p-5 border-b rounded bg-white/10 backdrop-blur-md shadow-xl ring-1 ring-white/20">
        <p className="text-2xl text-white">
          Movies you watched 
        </p>
        <button 
          onClick={() => setShowWatchedMovies(false)} 
          className="border px-2.5 border-red-900 rounded-full text-white bg-red-800 outline-none"
        >
          X
        </button>
      </div>
      {/* Add your watched movies list here */}
    </div>
  );

  return (
    <div className="text-white p-3 space-y-2">
      <div
        onClick={() => {
          setMovie(null);
        }}
        className="absolute right-7"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>

      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full h-60 object-cover rounded"
      />
      <h1 className="text-xl font-bold">
        {movie.Title} ({movie.Year})
      </h1>

      <p className="text-[12px] sm:text-[16px]">
        {movie.Plot.length > 150
          ? movie.Plot.slice(0, 150) + "..."
          : movie.Plot}
      </p>
      <p>
        <strong>Rated:</strong> {movie.imdbRating}
      </p>

      <StarRating />

      <div className="flex  justify-around ">
        <button className="border p-1 rounded bg-green-700 outline-none border-green-700 ">
          Add to my list{" "}
        </button>
        <button
          onClick={() => {
            setMovie(null);
            setShowWatchedMovies(true);
          }}
          className="border p-1 rounded bg-red-700 outline-none border-red-700"
        >
          my list
        </button>
      </div>
    </div>
  );
};

export default Rightside;
