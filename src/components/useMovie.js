import { useEffect, useState } from "react";
const KEY = "1d16f7dc";
export function useMovie(query) {
  const [movies, setMovies] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(
    function () {
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`
          );
          if (!res.ok) {
            console.log(res.ok);
            throw new Error("Something went wrong");
          }

          const data = await res.json();

          if (data.Response === "False") {
            throw new Error("Movie Not Found");
          }
          setMovies(data.Search);
        } catch (err) {
          let errorMessage = err.message || "Movie Not Found";
          console.error(err);

          setError(errorMessage);
        } finally {
          setIsLoading(false);
        }
      }
      if (!query) {
        setMovies([]);
        setError("");
        return;
      }
      fetchMovies();
    },
    [query]
  );
  return { movies, isLoading, error };
}
