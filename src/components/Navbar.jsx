import SearchBar from "./SearchBar";

export default function Navbar({ query, setQuery }) {
  return (
    <div className="flex justify-between items-center bg-violet-950 h-16 p-6 rounded-xl">
      <h3 className="text-xl text-white font-extrabold uppercase inline">
        Popcorn🍿
      </h3>

      <SearchBar query={query} setQuery={setQuery} />

      <h3 className="text-l text-white font-bold uppercase">
        Made with 💖 using React and Tailwind
      </h3>
    </div>
  );
}
