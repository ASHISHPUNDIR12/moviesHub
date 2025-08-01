import { useEffect, useState } from "react";
import SmallMovieCard from "./SmallMovieCard";

import axios from "axios";

//interface define
interface leftsideProps {
  input: string;
  onMovieSelect: (id: string) => void;
}
interface Movie {
  Title: string;
  Year: string;
  Poster: string;
  imdbID: string;
}
const Leftside = ({ input, onMovieSelect }: leftsideProps) => {
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;

  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios(
          `https://www.omdbapi.com/?s=${input}&apikey=${apiKey}`
        );
        console.log(response.data.Search);
        setMovies(response.data.Search || []);
      } catch (e) {
        if (e) {
          console.error(e);
        }
      }
    };
    if (input.length > 3) getData();
    else setMovies([]);
  }, [input]);

  return (
    <div className="h-full overflow-y-auto scrollbar-hidden pr-2 ">
      <div className="flex flex-col gap-2 mt-1">
        {movies.length > 0 ? (
          movies.map((movie, index) => {
            return (
              <SmallMovieCard
                key={index}
                title={movie.Title}
                year={movie.Year}
                imageId={movie.Poster}
                imbId={movie.imdbID}
                onCardClick={onMovieSelect}
              />
            );
          })
        ) : (
          <>
            <p className=" font-semibold text-[18px] text-center text-white">
              No movies found.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Leftside;
