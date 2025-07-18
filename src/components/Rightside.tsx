import axios from "axios";
import { useEffect, useState } from "react";
import { myApiKey } from "../config";

interface RightSideProps {
  imdbId: string | null;
}
interface Movie {
  Title: string;
  Year: string;
  Actors: string;
  Rated: string;
  Poster: string;
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

  if (!movie) return <p className="text-white">Select a movie to see details.</p>;

  return (
    <div className="text-white p-3 space-y-2">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full h-60 object-cover rounded"
      />
      <h1 className="text-xl font-bold">{movie.Title} ({movie.Year})</h1>
      <p><strong>Actors:</strong> {movie.Actors}</p>
      <p><strong>Rated:</strong> {movie.Rated}</p>
    </div>
  );
};

export default Rightside;
