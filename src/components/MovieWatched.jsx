export default function MovieWatched({
  watchedMovieDetials,
  handleRemoveWatched,
}) {
  return (
    <ol>
      <li className="grid grid-cols-7 items-center m-4 bg-indigo-900 justify-evenly border border-b-lime-400 shadow-md rounded P-6">
        <div className="col-span-2">
          <img
            src={watchedMovieDetials.poster}
            alt={`${watchedMovieDetials.title} poster`}
            className="w-16 h-24 rounded"
          />
        </div>
        <div className="col-span-4">
          <div className="flex gap-6">
            <h3 className="text-xl text-white font-bold">
              {watchedMovieDetials.title}
            </h3>
            <span className="text-lg text-white bold">
              ⌚ {watchedMovieDetials.runtime}
            </span>
          </div>
          <div className="flex gap-6">
            <span className="text-lg text-white bold">
              ⭐ {watchedMovieDetials.userRating}
            </span>
            <span className="text-lg text-white bold">
              🌟 {watchedMovieDetials.imdbRating}
            </span>
          </div>
        </div>
        <div className="ml-4">
          <button
            className="text-white font-bold text-xl bg-red-600 w-8 h-8 rounded-xl"
            onClick={() => handleRemoveWatched(watchedMovieDetials.imdbID)}
          >
            X
          </button>
        </div>
      </li>
    </ol>
  );
}
