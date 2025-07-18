import axios from "axios";
import { useEffect, useState } from "react";
import { myApiKey } from "../config";
import Star from "./StarRating";
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
  const [movie, setMovie] = useState<Movie | null>(null);
  useEffect(() => {
    const getData = async () => {
      try {
        if (!imdbId) return;
        const response = await axios(
          `https://www.omdbapi.com/?i=${imdbId}&apikey=${myApiKey}`
        );
        setMovie(response.data);
      } catch (e) {
        console.error(e);
      }
    };
    getData();
  }, [imdbId]);

  if (!movie)
    return (
      <p className="text-white text-center text-[18px] font-semibold">
        Select a movie to see details.
      </p>
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
    </div>
  );
};

export default Rightside;
