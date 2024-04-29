import Movies from "./Movies";
export default function LeftSide({ movies, onSelectMovie }) {
  return (
    <ul className="flex flex-col m-6 p-6 bg-indigo-950 rounded-md drop-shadow-sm">
      {movies.map((movies) => (
        <Movies
          key={movies.imdbID}
          movie={movies}
          onSelectMovie={onSelectMovie}
        />
      ))}
    </ul>
  );
}
