import { Fragment, useEffect, useState } from "react";
import StarRating from "./StarRating";
import Loader from "./Loader";
const KEY = "1d16f7dc";
export default function SelectedMovie({
  selectedMovie,
  handleCloseMovie,
  onAddWachedMovie,
  watchedMovieDetials,
}) {
  const [movies, setMovies] = useState({});
  const [isloading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");
  const {
    Title: title,
    Year: year,
    Rated: rated,
    Released: released,
    Runtime: runtime,
    Actors: actors,
    Director: director,
    Plot: plot,
    Writer: writer,
    imdbRating,
    Genre: genre,
    Language: language,
    Poster: poster,
  } = movies;
  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedMovie,
      title,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
    };
    onAddWachedMovie(newWatchedMovie);
    handleCloseMovie();
  }
  const isAlreadyAddedToWatched = watchedMovieDetials
    .map((watchedMovie) => watchedMovie.imdbID)
    .includes(selectedMovie);
  useEffect(
    function () {
      async function getMovieDetails() {
        setIsLoading(true);
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&i=${selectedMovie}`
        );
        const data = await res.json();
        setMovies(data);
        setIsLoading(false);
      }
      getMovieDetails();
    },
    [selectedMovie]
  );
  useEffect(
    function () {
      if (!title) return;
      document.title = `Movie | ${title} `;
      return function () {
        return (document.title = "usepopcorn");
      };
    },
    [title]
  );
  return (
    <Fragment>
      <div className="flex flex-col bg-indigo-950 rounded-md drop-shadow-sm  m-6 p-6">
        <button onClick={handleCloseMovie} className="rouded-xl w-4 h-4">
          ⬆️
        </button>

        <div className="grid grid-cols-4 gap-4">
          {isloading ? (
            <Loader />
          ) : (
            <Fragment>
              <div className="flex gap-6 col-span-4">
                <img src={poster} className="w-24 h-24 mt-4 col-span-1" />

                <div className="grid grid-col-4">
                  <div className="col-span-2">
                    <h2 className="text-white text-md font-bold">{title}</h2>
                  </div>
                  <div className="col-span-2">
                    <h4 className="text-white col-2">Actors:{actors}</h4>
                  </div>
                </div>
              </div>
            </Fragment>
          )}
        </div>
        <div>
          <div className="bg-zinc-800 rounded-2xl m-6 p-6 flex justify-center align-center flex-col">
            <StarRating size={24} maxRating={10} onSetRating={setUserRating} />
            {!isAlreadyAddedToWatched ? (
              <button
                className="w-38 h-12 p-4 bg-purple-600 text-white mt-6 rounded-2xl"
                onClick={handleAdd}
              >
                Add to Watched
              </button>
            ) : (
              <p className="text-white w-38 h-12 p-4 bg-purple-600 text-white m-6 rounded-2xl">
                Already Added to Watched List
              </p>
            )}
          </div>
          <h6 className="text-white">
            writer: {writer} Director: {director}
          </h6>
          <p className="text-white mt-4">{plot}</p>
          <h3 className="text-white mt-6">
            language&Genre: {language} {genre}
          </h3>
          <h5 className="text-white">
            Rated :{imdbRating} RunTime: {runtime}
          </h5>
          <p className="text-white mt-8">Release: {released}</p>
        </div>
      </div>
    </Fragment>
  );
}
