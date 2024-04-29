export default function Movies({ movie, onSelectMovie }) {
  return (
    <li
      onClick={() => onSelectMovie(movie.imdbID)}
      className="grid grid-cols-3 items-center m-4 bg-indigo-900 justify-evenly border border-b-lime-400 shadow-md rounded P-6"
    >
      <img
        src={movie.Poster}
        alt={`${movie.Title} poster`}
        className="w-24 h-24 rounded p-2 col-span-1"
      />
      <div className="flex flex-col col-span-2">
        <h3 className="text-xl text-white font-bold">{movie.Title}</h3>
        <span className="text-lg text-white bold">🗓 {movie.Year}</span>
      </div>
    </li>
  );
}
