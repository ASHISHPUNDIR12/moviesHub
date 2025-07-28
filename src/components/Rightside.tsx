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
  const [watchedMovies, setWatchedMovies] = useState<Movie[]>([]);
  const [showAlert, setShowAlert] = useState(false);

  // Load watched movies from localStorage when component mounts or showWatchedMovies changes
  useEffect(() => {
    if (showWatchedMovies) {
      const stored = localStorage.getItem("watchedMovies");
      if (stored) {
        setWatchedMovies(JSON.parse(stored));
      } else {
        setWatchedMovies([]);
      }
    }
  }, [showWatchedMovies]);

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => setShowAlert(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

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

  // Add movie to localStorage
  const handleAddToList = () => {
    if (!movie) return;
    const stored = localStorage.getItem("watchedMovies");
    let movies: Movie[] = stored ? JSON.parse(stored) : [];
    // Avoid duplicates by imdbId
    if (!movies.some((m) => m.Title === movie.Title && m.Year === movie.Year)) {
      movies.push(movie);
      localStorage.setItem("watchedMovies", JSON.stringify(movies));
      setWatchedMovies(movies); // Update state immediately
      setShowAlert(true);
    }
  };

  const handleRemoveFromList = (title: string, year: string) => {
    const updatedMovies = watchedMovies.filter(
      (m) => !(m.Title === title && m.Year === year)
    );
    setWatchedMovies(updatedMovies);
    localStorage.setItem("watchedMovies", JSON.stringify(updatedMovies));
  };

  if (!movie || showWatchedMovies)
    return (
      <div>
        <div className="flex justify-between p-5 border-b rounded bg-white/10 backdrop-blur-md shadow-xl ring-1 ring-white/20">
          <p className="text-2xl text-white">Movies you watched</p>
        
        </div>
        {/* Watched movies list */}
        <div className="p-4 space-y-3">
          {watchedMovies.length === 0 ? (
            <p className="text-white">No movies in your list yet.</p>
          ) : (
            watchedMovies.map((m, idx) => (
              <div key={m.Title + m.Year + idx} className="flex items-center space-x-4 bg-white/10 p-2 rounded">
                <img src={m.Poster} alt={m.Title} className="w-12 h-16 object-cover rounded" />
                <div className="flex-1">
                  <p className="text-white font-bold">{m.Title} ({m.Year})</p>
                  <p className="text-white text-xs">{m.Actors}</p>
                  <p className="text-white text-xs">Rated: {m.imdbRating}</p>
                </div>
                {/* Scissors SVG icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-pink-400 cursor-pointer"
                  onClick={() => handleRemoveFromList(m.Title, m.Year)}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M8.768 5.232l-3.536 3.536m0 6.464l3.536 3.536m6.464-3.536l3.536-3.536M9 12a3 3 0 11-6 0 3 3 0 016 0zm12 0a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            ))
          )}
        </div>
      </div>
    );

  return (
    <div className="text-white p-3 space-y-2 relative">
      {/* Alert notification */}
      {showAlert && (
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2 rounded shadow-lg text-lg font-semibold animate-bounce border-2 border-white">
          Movie added to your list!
        </div>
      )}
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
        <button
          className="border p-1 rounded bg-green-700 outline-none border-green-700 "
          onClick={handleAddToList}
        >
          Add to my list
        </button>
        <button
          onClick={() => {
            setMovie(null);
            // Always reload watchedMovies from localStorage when showing the list
            const stored = localStorage.getItem("watchedMovies");
            setWatchedMovies(stored ? JSON.parse(stored) : []);
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
