import { Fragment, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Error from "./components/Error";
import LeftSide from "./components/LeftSide";
import SelectedMovie from "./components/SelectedMovie";
import RightSide from "./components/RightSide";
const KEY = "1d16f7dc";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watchedMovieDetials, setWatchedMovieDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  function handleSelectMovie(id) {
    setSelectedMovie((selectedMovie) => (selectedMovie == id ? null : id));
  }
  function handleCloseMovie(id) {
    setSelectedMovie(null);
  }
  function handleAddWatchedMovie(selectedMovie) {
    setWatchedMovieDetails((watchedMovieDetials) => [
      ...watchedMovieDetials,
      selectedMovie,
    ]);
  }
  function handleRemoveWatched(id) {
    setWatchedMovieDetails((watchedMovieDetials) =>
      watchedMovieDetials.filter((wathcedMovie) => wathcedMovie?.imdbID !== id)
    );
  }
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

  return (
    <Fragment>
      <div className="bg-indigo-700 h-screen">
        <Navbar query={query} setQuery={setQuery} />
        <div className="grid sm:grid-cols-2 grid-cols-1 h-5/6 overflow-scroll">
          {!isLoading && !error && (
            <LeftSide
              movies={movies}
              onSelectMovie={handleSelectMovie}
              selectedMovie={selectedMovie}
            />
          )}
          {error && <Error error={error} />}
          {isLoading && <Loader />}
          {selectedMovie ? (
            <SelectedMovie
              selectedMovie={selectedMovie}
              handleCloseMovie={handleCloseMovie}
              onAddWachedMovie={handleAddWatchedMovie}
              watchedMovieDetials={watchedMovieDetials}
            />
          ) : (
            <RightSide
              watchedMovieDetials={watchedMovieDetials}
              handleRemoveWatched={handleRemoveWatched}
            />
          )}
        </div>
      </div>
    </Fragment>
  );
}
