import { Fragment, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Error from "./components/Error";
import LeftSide from "./components/LeftSide";
import SelectedMovie from "./components/SelectedMovie";
import RightSide from "./components/RightSide";
import { useMovie } from "./components/useMovie";
import { useLocalStorage } from "./components/useLocalStorage";
const KEY = "1d16f7dc";

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { movies, isLoading, error } = useMovie(query);
  const [watchedMovieDetials, setWatchedMovieDetails] = useLocalStorage(
    [],
    "watched"
  );
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
