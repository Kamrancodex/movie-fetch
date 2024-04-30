import { useState, useEffect } from "react";
export function useLocalStorage(initialState, key) {
  const [watchedMovieDetials, setWatchedMovieDetails] = useState(function () {
    const storedMovies = localStorage.getItem(key);
    const parsedMovies = JSON.parse(storedMovies);

    // Check if parsedMovies is iterable (array or object)
    if (parsedMovies && typeof parsedMovies[Symbol.iterator] === "function") {
      return parsedMovies; // Set parsedMovies if it's iterable
    } else {
      return initialState; // Return an empty array if parsedMovies is not iterable
    }
  });
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(watchedMovieDetials));
    },
    [watchedMovieDetials, key]
  );
  return [watchedMovieDetials, setWatchedMovieDetails];
}
