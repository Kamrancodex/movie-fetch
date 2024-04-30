import MovieWatched from "./MovieWatched";
export default function RightSide({
  watchedMovieDetials,
  handleRemoveWatched,
}) {
  return (
    <div className="flex flex-col m-6 p-6 bg-indigo-950 rounded-md drop-shadow-sm">
      <div className="flex justify-center flex-col">
        {watchedMovieDetials?.map((watchedMovieDetials) => (
          <MovieWatched
            watchedMovieDetials={watchedMovieDetials}
            key={watchedMovieDetials.imdbID}
            handleRemoveWatched={handleRemoveWatched}
          />
        ))}
      </div>
    </div>
  );
}
